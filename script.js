class Pet{
    constructor(name, hunger, happiness, adopted){
        this.name = name
        this.hunger = hunger
        this.happiness = happiness
        this.adopted = adopted
        this.alive = true
    }
    feed(){
        this.hunger -= 1 // Less hunger
    }
    play(){
        this.happiness += 1 // Makes them happy
        this.hunger += 1 // Makes them hungry
    }
    rest(){
        this.happiness -= 1 
        this.hunger += 1
    }
    status(){
        if(this.hunger <= 0){ // Overfeeding
            this.alive = false
            return `${this.name} was overfed to the point that his stomach burst. RIP ${this.name}... You will be missed.`; // Death message as HTML snippet
        }else if(this.hunger >= 10){ // Starving
            this.alive = false
            return `${this.name} was so hungry that he starved to death. RIP ${this.name}... You will be missed.`;
        }else if(this.happiness >= 10){ // Too happy
            this.alive = false
            return `${this.name} was so happy that he jumped out the window and ran away. Come back ${this.name}!`;
        }else if(this.happiness <= 0){ // Too bored
            this.alive = false
            return `${this.name} was so bored that he ran away to find a new owner. Please come back ${this.name}! I promise to play with you more often!`;
        }else{ // If the pet is fine
            return `Name: ${this.name}<br>
            Hunger: ${this.hunger}<br>
            Happiness: ${this.happiness}<br>
            Adopted: ${this.adopted}<br>
            Alive: ${this.alive}
            `; // Returns overall status as HTML snippet
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
        return "Woof! Woof!"
    }
    status(){
        if(this.hunger <= 0){
            this.alive = false
            return `${this.name} was overfed to the point that his stomach burst. Rest in peace ${this.name}... You will be missed.`;
        }else if(this.hunger >= 10){
            this.alive = false
            return `${this.name} was so hungry that he starved to death. Rest in peace ${this.name}... You will be missed.`;
        }else if(this.happiness >= 10){
            this.alive = false
            return `${this.name} was overjoyed! He jumped out the window and ran away... Come back ${this.name}!`;
        }else if(this.happiness <= 0){
            this.alive = false
            return `${this.name} was so bored that he ran away to find a new owner. Please come back ${this.name}! I promise to play with you more often!`;
        }else{
            return `Name: ${this.name}<br>
            Hunger: ${this.hunger}<br>
            Happiness: ${this.happiness}<br>
            Adopted: ${this.adopted}<br>
            Breed: ${this.breed}<br>
            Alive: ${this.alive}
            `;
        }
    }
    play(){
        this.happiness += 1.5 // Dogs are very playful and happy
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
            this.alive = false
            return `${this.name} was overfed to the point that his stomach burst. Rest in peace ${this.name}... You will be missed.`;
        }else if(this.hunger >= 10){
            this.alive = false
            return `${this.name} was so hungry that he starved to death. Rest in peace ${this.name}... You will be missed.`;
        }else if(this.happiness >= 10){
            this.alive = false
            return `${this.name} was overjoyed! He jumped out the window and ran away... Come back ${this.name}!`;
        }else if(this.happiness <= 0){
            this.alive = false
            return `${this.name} was so bored that he ran away to find a new owner. Please come back ${this.name}! I promise to play with you more often!`;
        }else{
            return `Name: ${this.name}<br>
            Hunger: ${this.hunger}<br>
            Happiness: ${this.happiness}<br>
            Adopted: ${this.adopted}<br>
            Color: ${this.color}<br>
            Alive: ${this.alive}
            `;
        }
    }
    purr(){
        return "Purr..."
    }
    play(){
        this.happiness += 1
        this.hunger += 0.5 // Cats like to conserve energy
    }
}

// Stores all the dogs and cats and other pets
const shelter = [
    new Dog("Buddy", 5, 5, false, "Golden Retriever"),
    new Cat("Whiskers", 5, 5, false, "Gray"),
]

const container = document.getElementById("pet-display");

function render(){
    container.innerHTML = ""; // Clears last rendered stuff
    shelter.forEach(pet =>{
        let petDiv = document.createElement("div");
        petDiv.classList.add("pet-card") // Adds a class for styling
        petDiv.innerHTML = `
            <h2>${pet.name}</h2>
            <p>${pet.status()}</p>
        `;

        if(pet.alive){ // Gets rid of the buttons if the pet dies (can't do anything with a dead pet)
            let feedBtn = document.createElement("button");
            feedBtn.innerText = "Feed"; // Edits button text
            feedBtn.onclick = function(){
                let feed = confirm(`Are you sure you want to feed ${pet.name}?`) // Conformation message
                if(feed){ // If you click yes, it does the function
                    pet.feed();
                    pet.status();
                    render(); // Renders every button click. This way, you don't need a button dedicated to rendering!
                }
            }
            let playBtn = document.createElement("button");
            playBtn.innerText = "Play";
            playBtn.onclick = function(){
                let play = confirm(`Are you sure you want to play with ${pet.name}?`)
                if(play){
                    pet.play();
                    pet.status();
                    render();
                }
            }
            let restBtn = document.createElement("button");
            restBtn.innerText = "Rest";
            restBtn.onclick = function(){
                let rest = confirm(`Are you sure you want ${pet.name} to rest for a bit?`)
                if(rest){
                    pet.rest();
                    pet.status();
                    render();
                }
            }
            let adoptBtn = document.createElement("button");
            adoptBtn.innerText = "Adopt";
            adoptBtn.onclick = function(){
                let adopt = confirm(`Are you sure you want to adopt ${pet.name}?`)
                if(adopt){
                    pet.adopt();
                    pet.status();
                    render();
                }
            }
            let releaseBtn = document.createElement("button");
            releaseBtn.innerText = "Release/Remove";
            releaseBtn.onclick = function(){
                let release = confirm(`Are you sure you want to release ${pet.name} into the wild?`)
                if(release){
                    let index = shelter.indexOf(pet); // indexOf tells where the pet is in the array
                    if(index > -1){ // Array selection can't go below 0
                        shelter.splice(index, 1) // Removes that pet from the array
                    }
                    render();   
                }
            }
            if("breed" in pet){ // Breed is only in dogs so this selects dogs
                let barkBtn = document.createElement("button")
                barkBtn.innerText = "Bark";
                barkBtn.onclick = function(){
                    pet.bark();
                    alert(`${pet.name} is barking! But at what?`)
                }
                petDiv.appendChild(barkBtn)
            }
            if("color" in pet){ // Same logic applies for cats
                let purrBtn = document.createElement("button")
                purrBtn.innerText = "Purr";
                purrBtn.onclick = function(){
                    pet.purr();
                    alert(`${pet.name} is purring! ${pet.name} is comfortable.`)
                }
                petDiv.appendChild(purrBtn)
            }

            petDiv.appendChild(feedBtn); // Adds button to the petDiv
            petDiv.appendChild(playBtn);
            petDiv.appendChild(restBtn);
            petDiv.appendChild(adoptBtn);
            petDiv.appendChild(releaseBtn);

        }else{ // This is to get rid of the petDiv once the pet dies dead (basically another releaseBtn)
            let releaseBtn = document.createElement("button");
            releaseBtn.innerText = "Leave";
            releaseBtn.onclick = function(){
                let release = confirm(`Are you sure you want to leave ${pet.name}?`) // Sob
                if(release){
                    let index = shelter.indexOf(pet);
                    if(index > -1){
                        shelter.splice(index, 1)
                    }
                    render();   
                }
            }
            petDiv.append(releaseBtn)
        }
        container.appendChild(petDiv); // The petDiv is then added to the container
    });
}

function addPet(){
    let type = prompt("Do you want a Dog or a Cat?").toLowerCase() // Helps with if statements
    let name = prompt("Enter the pet's name:")
    let hunger = 5 // Set values
    let happiness = 5

    if(type === "dog"){
        let breed = prompt("Enter the dog's breed:") // Dog trait
        shelter.push(new Dog(name, hunger, happiness, false, breed)) // Pushes the new pet into the shelter array
    }else if(type === "cat"){
        let color = prompt("Enter the cat's color:") // Cat trait
        shelter.push(new Cat(name, hunger, happiness, false, color))
    }else{
        alert("Unknown pet type!")
        return;
    }
    render();
}

render(); // Renders everything