class Car{
    constructor(make, color, price){
        this.car = {
            make: make,
            color: color,
            price: price
        }
        this.make = make
        this.color = color
        this.price = price
        this.features = []
        this.features.push(this.car)
    }
    addFeature(feature){
        this.features.push(feature)
        console.log(this.features)
    }
}

const bmw = new Car("BMW", "White", 60000)
bmw.addFeature("Sunroof")
bmw.addFeature("Leather Seats")

bmw.features[0].price = 80000
console.log(bmw.features[0].price)