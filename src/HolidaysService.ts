import axios from "axios";

interface Options {
    country: string;
    year: number;
}

export interface Holyday {
    name: string
    description: string
    country: Country
    date: Date
    type: string[]
    primary_type: string
    canonical_url: string
    urlid: string
    locations: string
    states: string
}

export interface Country {
    id: string
    name: string
}

export interface Date {
    iso: string
    datetime: Datetime
}

export interface Datetime {
    year: number
    month: number
    day: number
}


export function getHolidays(opts: Options): Promise<Holyday[]> {
    const url = 'https://calendarific.com/api/v2/holidays'

    return axios.get(url, {
        params: {
            api_key: '',
            country: opts.country,
            year: opts.year
        }
    })
        .then(res => res.data.response.holidays);
}
