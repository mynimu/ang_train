import { EmpService } from './emp.service';
import { Employee } from './employee';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  emps : Employee[];
  selectedEmp : Employee;
  
  constructor(private service : EmpService ) { }
 
  loadAll(): void{
      this.service.allEmps().then(a => this.emps = a);  
    } 
  
  ngOnInit() {
    this.loadAll();
  }

  deleteEmp(empId){
    this.service.deleteEmp(empId).then(a => {
     this.selectedEmp = undefined; 
     this.loadAll();
    });
    
  }
  
  detail(emp : Employee){
    this.selectedEmp = new Employee(emp.firstName, emp.lastName, emp.department);
    this.selectedEmp.id = emp.id;
  }
  newEmp(){
    this.selectedEmp = new Employee('', '','');
    this.loadAll();
  }
  
  save(){
     if(this.selectedEmp.id) {
    
     this.service.save(this.selectedEmp).then(a => this.loadAll()).catch(a=> 'problem'+a);
    
    }else{
        this.service.create(this.selectedEmp).then(a => this.loadAll()).catch(a=> 'problem'+a);
     }
  }
    
}
