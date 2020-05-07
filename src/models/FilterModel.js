export class FilterModel {

    constructor(params = {}) {
        this.type = params.type || 'car';
        this.used = params.used || true;
        this.new = params.new || true;
        this.place = params.place || '';
        this.range = params.range || '';
        this.make = params.make || '';
        this.model = params.model || '';
        this.year = params.year || '';
        this.price = params.price || '';
        this.version = params.version || '';
    }

}

export const ranges = [
    {label: "10", value: "10 Km"},
    {label: "20", value: "20 Km"},
    {label: "50", value: "50 Km"},
    {label: "100", value: "100 Km"},
];

export const years = [
    {label: "2010", value: "2010"},
    {label: "2011", value: "2011"},
    {label: "2012", value: "2012"},
    {label: "2013", value: "2013"},
    {label: "2014", value: "2014"},
    {label: "2015", value: "2015"},
    {label: "2016", value: "2016"},
    {label: "2017", value: "2017"},
    {label: "2018", value: "2018"},
    {label: "2019", value: "2019"},
    {label: "2020", value: "2020"},
];

export const prices = [
    {label: "De R$ 5.000,00 a R$ 10.000,00", value: "5-10"},
    {label: "De R$ 10.000,00 a R$ 20.000,00", value: "10-20"},
    {label: "De R$ 20.000,00 a R$ 30.000,00", value: "20-30"},
    {label: "De R$ 30.000,00 a R$ 60.000,00", value: "30-60"},
];

