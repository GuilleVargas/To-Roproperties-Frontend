export class House{

    
    constructor(_id = '',w_search = '', title= '',type = '', province = '', population = '', room = 0,bath = 0, meters = 0, price = 0){
        this._id = _id;
        this.title= title;
        this.w_search = w_search;
        this.type = type;
        this.province = province;
        this.population = population;
        this.room = room;
        this.bath = bath;
        this.meters = meters;
        this.price = price;
    }

    _id: String;
    title:String;
    w_search: String;
    type: String;
    province: String;
    population: String;
    room: Number;
    bath: Number;
    meters: Number;
    price: Number;
}