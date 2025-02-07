// CODE here for your Lambda Classes

//this is the person class
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak = () => {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

//created the class instructor that extends the person class
class Instructor extends Person {
    constructor(name, age, location, specalty, favLanguage, catchPhrase) {
        super(name, age, location)
        this.specialty = specalty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo = (subject) => {
        return `Today we are learning about ${subject}`;
    }
    grade = (student, subject) => {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}
// created the class student that extends the person class

class Student extends Person {
    constructor(name, age, location, className, previousBackground, favSubjects) {
        super(name, age, location)
        this.className = className;
        this.previousBackground = previousBackground;
        this.favSubjects = favSubjects;
    }
    listsSubjects = () => {
        this.favSubjects.forEach(element => {
            console.log(element)
        });
    }
    PRAssignment = (subject) => {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge = (subject) => {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

// created a class projectManager that extends the instructor class which in turn extends the person class.
class ProjectManager extends Instructor {
    constructor(name, age, location, specalty, favLanguage, catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, specalty, favLanguage, catchPhrase)
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;

    }
    standUp = (channel) => {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode = (student, subject) => {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


// const studentDami = new Student("Dami",10,"Lagos","CS123",'teacher', ['Html', 'CSS', 'JavaScript'])
// studentDami.listsSubjects();


// let projectManagerAkin = new ProjectManager("Akinyemi",40,"Lagos",'Redux',"Javascript","Don't forget the homies",'CS1',"Sean")

// const debug = projectManagerAkin.debugsCode(studentDami, "CSS")
// console.log(debug)