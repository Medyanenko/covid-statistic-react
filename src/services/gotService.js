export default class GotService {
    constructor() {
        this._apiBase = 'https://api.covid19api.com';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }
    getCountries(){
        return this.getResource(`/countries`);
    }
    
    getWorldWip(from, to) {
        return this.getResource(`world?from=${from}to=${to}`);
    }
    
    getLiveCountry(country, data) {
        return this.getResource(`/live/${country}/status/confirmed/date/${data}`);
    }
}
// const got = new GotService();
// got.getLiveCountry()
//     .then(res => {
//         res.forEach(item => console.log(item.Country));
//     });


