import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Examen } from '../../services/examen';
import { Locations } from '../../interfaces/examen.interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ejercicio2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css'
})
export class Ejercicio2 {
  constructor(public service: Examen, public http: HttpClient) {}

  reactiveForm = new FormGroup({
    name: new FormControl(''),
  });

  showResults = false;
  locationName = '';
  residents: any[] = [];
  planets: any[] = [];
  currentPlanetIndex = 0;
  episodes: any[] = [];

  public onSubmit(): void {
    const term = this.reactiveForm.value.name ?? '';
    this.service.getLocations(term).subscribe((data: Locations) => {
      if (data.results && data.results.length > 0) {
        this.planets = data.results.filter(loc => loc.type === 'Planet');
        this.currentPlanetIndex = 0;
        if (this.planets.length === 0) {
          this.residents = [];
          this.showResults = true;
          return;
        }
        this.setPlanet(this.currentPlanetIndex);
        this.showResults = true;
      } else {
        this.residents = [];
        this.planets = [];
        this.showResults = true;
      }
    }, (error) => {
      console.error('Error fetching data:', error);
      this.locationName = 'Error';
      this.residents = [];
      this.planets = [];
      this.showResults = true;
    });
  }

  setPlanet(index: number): void {
  const location = this.planets[index];
  this.locationName = location.name;
  this.residents = [];
  this.episodes = [];
  location.residents.forEach((url: string) => {
    this.http.get(url).subscribe((character: any) => {
      this.residents.push({
        name: character.name,
        image: character.image,
        episodes: character.episode
      });
    });
  });
}

showEpisodes: boolean = false;
selectedEpisodes: any[] = [];
selectedResidentName: string = '';

onResidentClick(resident: any): void {
  this.selectedEpisodes = [];
  this.selectedResidentName = resident.name;
  this.showEpisodes = true;
  resident.episodes.forEach((epUrl: string) => {
    this.http.get(epUrl).subscribe((episode: any) => {
      this.selectedEpisodes.push({
        name: episode.name,
        air_date: episode.air_date
      });
    });
  });
}

  prevPlanet(): void {
    if (this.planets.length === 0) return;
    this.currentPlanetIndex = (this.currentPlanetIndex + 1) % this.planets.length;
    this.setPlanet(this.currentPlanetIndex);
  }

  nextPlanet(): void {
    if (this.planets.length === 0) return;
    this.currentPlanetIndex =
      (this.currentPlanetIndex - 1 + this.planets.length) % this.planets.length;
    this.setPlanet(this.currentPlanetIndex);
  }

  public reset(): void {
    this.showResults = false;
    this.locationName = '';
    this.residents = [];
    this.planets = [];
    this.currentPlanetIndex = 0;
    this.reactiveForm.reset();
  }

  closeEpisodes(): void {
    this.showEpisodes = false;
    this.selectedEpisodes = [];
    this.selectedResidentName = '';
  }
}