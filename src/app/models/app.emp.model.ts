export class Employee {
  constructor(
    public EmpNo:number,
    public EmpName: string,
    public DeptName: string,
    public Designation: string,
    public Salary: number
  ){}
}

export const Employees = [
  {
    EmpNo:101, EmpName: 'Mahesh', DeptName:'IT',Designation:'Manager', Salary:1000000
  },
  {
    EmpNo:102, EmpName: 'Ajit', DeptName:'IT',Designation:'Manager', Salary:900000
  },
  {
    EmpNo:103, EmpName: 'Makrand', DeptName:'IT',Designation:'Manager', Salary:800000
  },
  {
    EmpNo:104, EmpName: 'Amit', DeptName:'HR',Designation:'Lead', Salary:700000
  },
  {
    EmpNo:105, EmpName: 'Manoj', DeptName:'TRG',Designation:'Lead', Salary:600000
  },
  {
    EmpNo:106, EmpName: 'Abhijit', DeptName:'IT',Designation:'Manager', Salary:500000
  },
  {
    EmpNo:107, EmpName: 'Manish', DeptName:'HR',Designation:'Lead', Salary:400000
  },
  {
    EmpNo:108, EmpName: 'Ajay', DeptName:'IT',Designation:'Manager', Salary:300000
  },
  {
    EmpNo:109, EmpName: 'Mikesh', DeptName:'TRG',Designation:'Lead', Salary:200000
  },
  {
    EmpNo:110, EmpName: 'Atul', DeptName:'HR',Designation:'Manager', Salary:100000
  },
];
