class Employee {

    setEmpDetails(name, id, phone){
        this.name = name
        this.id = id
        this.phone = phone
    }

    getEmpName() {
        return this.name
    }

    getEmpId(){
        return this.id
    }

    getEmpPhone(){
        return this.phone
    }
}

let emp1 = new Employee()

emp1.setEmpDetails('John', 1001, 42134234)
console.log(emp1.getEmpName())
console.log(emp1.getEmpId())
console.log(emp1.getEmpPhone())