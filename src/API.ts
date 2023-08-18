export type Currency = {
    name: string;
    symbol: string;
};

export type LanguageCommon = {
    common: string;
    official: string;
};

export type NativeName = {
    [languageCode: string]: LanguageCommon;
};

export type Countries1 = {
    name: {
        common: string;
        official: string;
        nativeName: NativeName;
    } ;
    population: number;
    region: string;
    capital: string[]
    flags: { [key: string] :string};
    subregion: string;
    tld: string[];
    currencies: { [key: string]: Currency };
    languages: string[];
    borders: string[];
}



export const fetchCountries = async() => {
    const endpoint = `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,subregion,tld,currencies,languages,borders`;
    const data = await (await fetch(endpoint)).json();
    const modifiedData = data.map((country: Countries1) => ({
        ...country
    }));

    return modifiedData
    // return data.map((country: Countries) => ({
    //     country
    // }))
}

// export const fetchCountries = async(name: string | undefined, population: number, region: string, capital: string, nativeName: string | undefined, subRegion: string | undefined, topLevelDomain: string | undefined, currencies: string | undefined, languages: string | undefined, borderCountries: string | undefined) => {
//     const endpoint = `https://restcountries.com/v3.1/all?`;
//     const data = await (await fetch(endpoint)).json();
//     console.log(data)
// }


// name: string | undefined, population: number, region: string, capital: string, nativeName: string | undefined, subRegion: string | undefined, topLevelDomain: string | undefined, currencies: string | undefined, languages: string | undefined, borderCountries: string | undefined