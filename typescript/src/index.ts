type Employee = {
    id: number,
    name: string,
    yearJoined: string
}


let emp1: Employee = {
    id: 1,
    name: 'Juris',
    yearJoined: Date.now.toString()
}


let emp2: Employee = {
    id: 2,
    name: 'Janis',
    yearJoined: '7/4/2023'

}


let employees: Employee[] = [emp1, emp2];

let empNames: string[] = [emp1.name, emp2.name]

console.log(empNames);


