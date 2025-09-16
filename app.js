// const express = require('express')
// const path = require('path')
// const app = express()

// app.use(express.static(path.join(__dirname)))

// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, 'index.html'))
// })

// app.listen(5000, () =>{
//     console.log('Server is running on http://localhost:5000')
// })

//////////////////////////////////////////////////////////////////////////////////

const EventEmitter = require('events');

class Pet extends EventEmitter{
    constructor(name, hunger, happiness, adopted){
        super()
        this.name = name
        this.hunger = hunger
        this.happiness = happiness
        this.adopted = adopted
        this.alive = true
    }
    feed(){
        this.hunger -= 1
    }
    play(){
        this.happiness += 1
        this.hunger += 1
    }
    rest(){
        this.happiness -= 1
        this.hunger += 1
    }
    status(){
        if(this.hunger <= 0){
            console.log(this.name + " was overfed to the point that his stomach burst. Rest in peace", this.name + "...", "You will be missed.")
        }else if(this.hunger >= 10){
            console.log(this.name + " was so hungry that he starved to death. Rest in peace", this.name + "...", "You will be missed.")
        }else if(this.happiness >= 10){
            console.log(this.name + " was overjoyed! He jumped out the window and ran away... Come back", this.name + "!")
        }else if(this.happiness <= 0){
            console.log(this.name + " was so bored that he ran away to find a new owner. Please come back", this.name + "!", "I promise to play with you more often!")
        }else{
            console.log("Name: " + this.name, "\nHunger: " + this.hunger, "\nHappiness: " + this.happiness, "\nAdopted: " + this.adopted, "\nAlive: " + this.alive)
        }
    }
    adopt(){
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
        if(this.hunger <= 0){
            console.log(this.name + " was overfed to the point that his stomach burst. Rest in peace", this.name + "...", "You will be missed.")
        }else if(this.hunger >= 10){
            console.log(this.name + " was so hungry that he starved to death. Rest in peace", this.name + "...", "You will be missed.")
        }else if(this.happiness >= 10){
            console.log(this.name + " was overjoyed! He jumped out the window and ran away... Come back", this.name + "!")
        }else if(this.happiness <= 0){
            console.log(this.name + " was so bored that he ran away to find a new owner. Please come back", this.name + "!", "I promise to play with you more often!")
        }else{
            console.log("Name: " + this.name, "\nHunger: " + this.hunger, "\nHappiness: " + this.happiness, "\nAdopted: " + this.adopted, "\nAlive: " + this.alive + "\nBreed: " + this.breed)
        }
    }
    play(){
        this.happiness += 1.5
        this.hunger += 1
    }
}

class Cat extends Pet{
    constructor(name, hunger, happiness, adopted, color){
        super(name, hunger, happiness, adopted)
        this.color = color
    }
    status(){
        if(this.hunger <= 0){
            console.log(this.name + " was overfed to the point that his stomach burst. Rest in peace", this.name + "...", "You will be missed.")
        }else if(this.hunger >= 10){
            console.log(this.name + " was so hungry that he starved to death. Rest in peace", this.name + "...", "You will be missed.")
        }else if(this.happiness >= 10){
            console.log(this.name + " was overjoyed! He jumped out the window and ran away... Come back", this.name + "!")
        }else if(this.happiness <= 0){
            console.log(this.name + " was so bored that he ran away to find a new owner. Please come back", this.name + "!", "I promise to play with you more often!")
        }else{
            console.log("Name: " + this.name, "\nHunger: " + this.hunger, "\nHappiness: " + this.happiness, "\nAdopted: " + this.adopted, "\nAlive: " + this.alive + "\nColor: " + this.color)
        }
    }
    purr(){
        console.log("Purr...")
    }
    play(){
        this.happiness += 1
        this.hunger += 0.5
    }
}

const shelter = [
    new Dog("Buddy", 5, 5, false, "Golden Retriever"),
    new Cat("Whiskers", 5, 5, false, "Gray"),
    new Dog("Max", 5, 5, false, "Beagle"),
    new Cat("Luna", 5, 5, false, "Black")
]

container = document.getElementById("pet display");
shelter.forEach(pet => {
    let petDiv = document.createElement("div");
    petDiv.innerHTML = `<h2>${pet.name}</h2><p>Hunger: ${pet.hunger}</p><p>Happiness: ${pet.happiness}</p><p>Adopted: ${pet.adopted}</p><p>Alive: ${pet.alive}</p>`;
    container.appendChild(petDiv);
})