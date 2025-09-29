class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get profession() {
    return this._profession;
  }

  get salary() {
    return this.#salary;
  }

  set firstName(name) {
    if (
      typeof name !== "string" ||
      name.length < 2 ||
      name.length > 50 ||
      !/^[A-Za-z]+$/.test(name)
    ) {
      throw new Error("Invalid first name");
    }
    this._firstName = name;
  }

  set lastName(name) {
    if (
      typeof name !== "string" ||
      name.length < 2 ||
      name.length > 50 ||
      !/^[A-Za-z]+$/.test(name)
    ) {
      throw new Error("Invalid last name");
    }
    this._lastName = name;
  }

  set profession(value) {
    if (
      typeof value !== "string" ||
      value.trim().length === 0 ||
      !/^[A-Za-z ]+$/.test(value)
    ) {
      throw new Error("Invalid profession");
    }
    this._profession = value;
  }

  set salary(value) {
    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      value <= 0 ||
      value >= 10000
    ) {
      throw new Error("Invalid salary");
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #title;
  #phone;
  #address;
  #employees = [];

  constructor(title, phone, address) {
    this.#title = title;
    this.#phone = phone;
    this.#address = address;
  }

  get title() {
    return this.#title;
  }

  get phone() {
    return this.#phone;
  }

  get address() {
    return this.#address;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error("Not an Employee instance");
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.#title}\nАдрес: ${this.#address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const emp = this.#employees.find((e) => e.firstName === firstName);
    if (!emp) {
      throw new Error("Employee not found");
    }
    return emp;
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error("Employee not found");
    }
    this.#employees.splice(index, 1);
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((e) => e.firstName === firstName);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, e) => sum + e.salary, 0);
  }
}

export { Employee, Company };
