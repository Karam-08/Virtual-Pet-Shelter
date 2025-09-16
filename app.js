const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(5000, () =>{
    console.log('Server is running on http://localhost:5000')
})

//////////////////////////////////////////////////////////////////////////////////

const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Pet extends EventEmitter{
    constructor(name, hunger, happiness, adopted){
        super()
        this.name = name
        this.hunger = hunger
        this.happiness = happiness
        this.adopted = adopted
    }

    checkLife(){
        if(this.hunger > 10 || this.hunger < 0 || this.happiness > 10 || this.happiness < 0){
            this.emit('dead', this.name)
        }
    }
    feed(){
        if(!this.alive){return;}
        this.hunger -= 1
        this.checkLife()
    }
    play(){
        if(!this.alive){return;}
        this.happiness += 1
        this.hunger += 1
        this.checkLife()
    }
    status(){
        console.log("Name: " + this.name, "Hunger: " + this.hunger, "Happiness: " + this.happiness, "Adopted: " + this.adopted, "Alive: " + this.alive)
    }
    adopt(){
        if(!this.alive){return;}
        this.adopted = true
    }
}

class Dog extends Pet{
    constructor(name, hunger, happiness, adopted, breed){
        super(name, hunger, happiness, adopted)
        this.breed = breed
    }
    bark(){
        console.log("Woof! Woof!")
    }
    status(){
        super.status()
        console.log("Breed: " + this.breed)
    }
    play(){
        this.happiness += 2
        this.hunger += 1
    }
}

class Cat extends Pet{
    constructor(name, hunger, happiness, adopted, color){
        super(name, hunger, happiness, adopted)
        this.color = color
    }
    purr(){
        console.log("Purr...")
    }
    play(){
        this.happiness += 0.75
        this.hunger += 0.25
    }
}