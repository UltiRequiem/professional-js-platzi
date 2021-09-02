import Singleton from './Singleton'

const a = Singleton.getInstance()
const b = Singleton.getInstance()

// true
console.log(a === b)
