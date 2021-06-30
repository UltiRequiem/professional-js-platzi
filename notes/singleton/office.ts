class Office {
  private static instance: Office;

  name: string;

  employees: number;

  constructor(name: string, employees: number) {
    this.name = name;
    this.employees = employees;

    if (typeof Office.instance === 'object') {
      return Office.instance;
    }

    Office.instance = this;
    return this;
  }
}

const firstOffice = new Office('Principal', 30);
console.log(firstOffice);
const secondOffice = new Office('Diagonal', 50);
console.log(secondOffice);
