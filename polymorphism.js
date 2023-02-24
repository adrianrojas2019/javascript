class Animal {

    constructor(name) {
        this.name = name
    }

    eats() {
        console.log(this.name + ' eats food')
    }
}

let animal = new Animal('Dog')

class alligator extends Animal {
    // eats() {
    //     console.log(this.name + ' eats fish')
    // }   
}

let murphy = new alligator('Murphy')
murphy.eats()