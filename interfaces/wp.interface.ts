export interface dataWP {
    0: [];
    1: {
        acf: {
            'block-1-title': string,
            'block-1-subtitle-1': string,
            'block-1-subtitle-2': string,
            "block-2": block2[]
        }
    }
}

export interface block2 {
    title: string,
    subtitle: string
}
