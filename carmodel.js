module.exports = class car{

    constructor(name,brand,doors,colour) {
        this.name = name;
        this.brand = brand;
        this.doors = doors;
        this.colour = colour;
    }

    name() {
        return this.name;
    }

    brand() {
        return this.brand;
    }

    doors() {
        return this.doors;
    }

    colour() {
        return this.colour;
    }

}