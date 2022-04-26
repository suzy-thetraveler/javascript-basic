// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자.
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  #name;
  #department;
  #workingHour;
  #employeeType;
  constructor(name, department, workingHour, employeeType) {
    this.#name = name;
    this.#department = department;
    this.#workingHour = workingHour;
    this.#employeeType = employeeType;
  }

  calculateSalery(workingHour, employeeType) {
    switch (employeeType) {
      case 'fullTime':
        return workingHour * 10000;
        break;
      case 'partTime':
        return workingHour * 8000;
        break;
    }
  }
}

const employee = new Employee();
console.log(employee.calculateSalery(9, 'fullTime'));

{
  /* 모범 답안 
  - 내가 하지 못했던 것은 extends 확장을 놓쳤던 것.
  - 공통된 요소가 있다면 공통 클래스로 묶은 후, 확장 클래스를 만들자.
  - 또한, 필드 값에 대한 항목을 찾아볼 필요가 없다면 굳이 만들어주지 않아도 된다.

  - static을 써서 숫자로 값을 전달하는 것이 아닌, 변수를 만들어서 매번 새로이 값을 입력하지 않도록 만들어주기.
  */
}
class Employee2 {
  constructor(name, department, workingHour, hourlyPay) {
    this.name = name;
    this.department = department;
    this.workingHour = workingHour;
    this.hourlyPay = hourlyPay;
  }

  calculatePay() {
    return this.workingHour * this.hourlyPay;
  }
}

class fulltimeEmployee extends Employee2 {
  static HOURLY_PAY = 10000;
  constructor(name, department, workingHour) {
    super(name, department, workingHour, fulltimeEmployee.HOURLY_PAY);
  }
}

class partimeEmployee extends Employee2 {
  static HOURLY_PAY = 8000;
  constructor(name, department, workingHour) {
    super(name, department, workingHour, partimeEmployee.HOURLY_PAY);
  }
}
const suzy = new fulltimeEmployee('suzy', 'webDesigner', 30);
const bruno = new partimeEmployee('bruno', 'guard-dog', 24);
console.log(suzy.calculatePay());
console.log(bruno.calculatePay());
