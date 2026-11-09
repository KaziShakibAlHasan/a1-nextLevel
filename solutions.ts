const multiplyValue = (num1: number, num2?: number) => {
  if ( num2 !== undefined) {
    return num1 * num2;
  } 
  return  num1 * 2
}


const processInput = (value: string | number | boolean) => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value == true) {
      return "Active";
    } else {
      return "Inactive";
    }
  } else if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
};
processInput("TypeScript");

const formatCoordinate = (coords: readonly [number, number, string]) => {
  return `Location: ${coords[2]} (${coords[0]}, ${coords[1]})`;
};

const concatenateArrays = <T>  (...arrays: T[][]) =>  {
  return arrays.flat()
  }


interface Course {
  title : string,
  students: number,
  isPublished: boolean

}
const getPopularCourses = (courses: Course[], minStudents: number) => {
  const newCourses = courses.filter((course) => course.isPublished === true && course.students >= minStudents)
  return newCourses
}

const pluckValues = <T, K extends keyof T> (items: T[], key: K) => {
    return items.map(item => item[key])
}

class Employee {
  protected name: string;
  private baseSalary : number
  constructor(name: string, baseSalary: number){
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(){
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}
class Manager  extends Employee {
  private department : string
  constructor(name: string, baseSalary: number, department: string){
    super(name, baseSalary)
    this.department =department;
  }
  getRoleInfo(){
    return `Manager of ${this.department}: ${this.name}`
  }
}


const validateAgeAsync = async (age: number) : Promise<string> => {
    return new Promise((resolve, reject) => {
      if(age >= 18){
        setTimeout(()=> {
          resolve("Access Granted")
        },1000);
      }else{
        reject(new Error("Access Denied: Must be 18 or older"))
      }
    })
    
}





