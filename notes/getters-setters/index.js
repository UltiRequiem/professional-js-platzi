const PERSON = {
  name: 'Zero',
  lastname: 'Requiem',
  get fullName() {
    return `${this.name} ${this.lastname}`
  },

  set fullName(fullName) {
    const parts = fullName.split(' ')
    this.name = parts[0] || ''
    this.lastname = parts[1] || ''
  }
}

PERSON.fullName = 'The One'

console.log(PERSON.fullName)
