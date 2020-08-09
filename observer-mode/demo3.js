const EventEmitter = require('events').EventEmitter

const emitter = new EventEmitter()

emitter.on('win', () => {
  console.log('win once')
})

emitter.on('win', () => {
  console.log('win twice')
})

// emitter.emit('win')

// 继承
class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

const tom = new Dog('tom')

tom.on('bark', function() {
  console.log(`${this.name} barked once!`)
})

tom.on('bark', function() {
  console.log(`${this.name} barked! twice`)
})

setTimeout(() => {
  tom.emit('bark')
})