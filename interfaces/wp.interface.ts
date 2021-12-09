export interface resultH1 {
    acf: resultH1Acf;
}

export interface resultH1Acf {
    "block-1-title": string;
}


export interface Weather {
    acf: Acf;
}

export interface Block2Entity {
    title: string;
    subtitle: string;
}

export interface Acf {
    'block-1-title': string;
    'block-1-subtitle-1': string;
    'block-1-subtitle-2': string;
    'block-2?': (Block2Entity)[] | null;
}
