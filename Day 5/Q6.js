class Vehicle {
    type;
    speed;

    constructor(type, speed){
        this.speed = speed;
        this.type = type;
    }

    move() {
        console.log(`${this.type} moves at ${this.speed} mph`)
    }
}

var a = new Vehicle('Mclaren', 120)
a.move();