//**reference type
//object2 points to the same address as object1
var object1 = { value: 10 }
var object2 = object1
var object3 = { value: 10 }

console.log('Object1 == Object2', object1 == object2)
console.log('Object1 == Object3', object1 == object3)

//**context cs scope

//this has windows object context
function a() {
  console.log('Inside a function this', this)

  let i = 1 //local scope
  console.log('Inside a func let i', i)
}

a()
//results in error saying i not defined because it is
//out of scope
// console.log('Outside a func let i', i)

const object4 = {
  a: function () {
    //this has now object4 context and not main windows context
    console.log('Inside object4 a func this', this)
  },
}

console.log(object4)

//**instantiation
class Player {
  constructor(name, type) {
    console.log('**Player', this)
    this.name = name
    this.type = type
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
    console.log('***Wizard', this)
  }
  play() {
    console.log(`WEEEE I am a ${this.type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'healer')
wizard1.introduce()
wizard1.play()
const wizard2 = new Wizard('Shawn', 'Dark magic')
wizard2.introduce()
wizard2.play()
