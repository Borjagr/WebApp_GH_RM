export interface GitHub {
    items: any;
    message:           string;
    errors:            Error[];
    documentation_url: string;
    status:            string;
}

export interface Error {
    resource: string;
    field:    string;
    code:     string;
}

export interface Locations {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}

