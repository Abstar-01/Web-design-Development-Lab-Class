class Pet {
    name;
    type;

    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    describe(){
        console.log( `${this.name} is a ${this.type}`)
    }

}

