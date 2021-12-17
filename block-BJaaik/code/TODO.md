## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

```js 
class Person{
    contractor (name, age , gender){
        this.name = name;
        this.age = age;
        this.gender;
    }
    eat(){
        return `eat healthy food `
    }
    sleep(){
return `You take at least 7 hours sleep`
    }
    walk(){
return `walking good for your health `
    }
}

class Player extends Person{
    constructor (name, age, gender, sportName){
super(name,age,gender);
this.sportName = sportName;
    }
    play(){
        return `I use to play cricket game daily`
    }
}

class Teacher extends Person {
    constructor (name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName = instituteName;
    }
teach(){
    return `I teach HTML, CSS and JS`
   }

}

class Artist extends Person {
    constructor (name,age,gender,kind){
        super(name,age,gender);
        this.kind = kind;
    }
createArt(){
    return `I create Drawing`
   }

}
class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
  playCricket() {
    return ;
  }
}

let person1 = new Person("Rahul" , 28, "male");
let player1 = new Player ("Rahul" , 28, "male", "cricket");
let teacher1 = new Teacher("Rahul", 28, "male", "Dharamshala")
let artist = new Artist ("Rahul", 28, "male", "drawing");
