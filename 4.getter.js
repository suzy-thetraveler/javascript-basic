// Access Property 접근자 프로퍼티
class Student {
  constructor(firstName, LastName) {
    this.firstName = firstName;
    this.LastName = LastName;
  }

  get fullName() {
    return `${this.firstName} ${this.LastName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('suzy', 'Kim');
student.LastName = 'rhee';
student.fullName = '이뚜띤';
console.log(student.firstName);
console.log(student.fullName);
