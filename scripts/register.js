let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pet:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Scarlett",
            age:5,
            gender:"Female",
            breed:"Catahoula",
            service:"Nail trim",
            owner:"Joey",
            phone:"111-111-1111"
        },
        {
            name:"Pete",
            age:25,
            gender:"Male",
            breed:"Yorkie",
            service:"Grooming",
            owner:"Steph",
            phone:"222-222-2222"
        },
        {
            name:"Peabody",
            age:15,
            gender:"Male",
            breed:"Huskie",
            service:"Shampoo",
            owner:"Victoria",
            phone:"333-333-3333"
        }
    ]
}
console.log(salon.pets);


function displayPetNames(){
    alert(`You have ${salon.pets.length} pets.`)
    for(let i=0;i<salon.pet.length;i++){
        console.log(salon.pet[i]);
    }
}
function Pet(name,age,gender){
    this.name=name;
    this.age=age
    this.gender=gender;
}
// create three pets using the constructor
let scooby = new Pet("Scooby",60,"Male");
salon.pets.push(scooby); //push the element into the array

let scarlett = new Pet("Scarlett",5,"Female");
salon.pets.push(scarlett);

let pete = new Pet("Pete",25,"Male")
salon.pets.push(Pete);

let peabody = new Pet("Peabody",15,"Male");
salon.pets.push(peabody);

let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");

function register(){
    console.log("Register");
    console.log(petName.value,petAge.value,petGender.value);
    console.log(thePet);
    salon.pets.push(thePet);
    console.log(salon.pets);
}