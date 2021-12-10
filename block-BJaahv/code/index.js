function createData(name, id, noOfProjects) {
    let data = {};
    data.name = name;
    data.id = id;
    data.noOfProjects = noOfProjects;
    data.getProjects = function (){
      return data.noOfProjects;
    },
  
    data.changeName = function (newName) {
      let prevName = user.name
      user.name = newName
      return prevName;
    };
  
    data.incrementProject =function (){
      data.noOfProjects += 1;
      return noOfproject
    }
    data.decrementProject =function (){
      data.noOfProjects -= 1;
      return noOfProject
    }
    return data
  }
  
  let aman =createData("Rahul",294,77);
  let johh = createData ("john",345,76);
  let createMethod = {
  
    getProjects: function (){
      return this.noOfProjects;
    },
  
     changeName= function (newName) {
      let prevName = this.name
      this.name = newName
      return prevName;
    },
  
    incrementProject: function (){
      this.noOfProjects += 1;
      return noOfproject
    }
   
  }
  
  function createData(name, id, noOfProjects) {
    let data = Object.create(createMethod)
    data.name = name;
    data.id = id;
    data.noOfProjects = noOfProjects;
    return data;
  
   

  
  let CreatedDataprototype = {
  
    getProjects: function (){
      return this.noOfProjects;
    },
  
     changeName: function (newName) {
      let prevName = this.name
      this.name = newName
      return prevName;
    },
  
    incrementProject: function (){
      this.noOfProjects += 1;
      return noOfproject
    }
    
  }
  
  function CreateData(name, id, noOfProjects) {
    
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    
   
  }
  
  let Rahul = new CreateData("rahul",294,77);

  //class Pattern
  

  
  class CreateData {
    constructor(name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    }
    getProjects(){
      return this.noOfProjects;
    }
  
     changeName (newName) {
      let prevName = this.name
      this.name = newName
      return prevName;
    }
  
    incrementProject(){
      this.noOfProjects += 1;
      return noOfproject
    }
    decrementProject(){
      this.noOfProjects -= 1;
      return noOfProject
    }
   
  }
  
  let rahul = new CreateData("Rahul",294,77);
  let johh = new CreateData ("john",345,76);
}