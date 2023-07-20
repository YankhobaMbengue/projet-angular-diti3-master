import { Component, OnInit } from '@angular/core';
import { Employe, Service} from '../employe';
import { EmployeService } from '../employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private empService : EmployeService,
    private router : Router
    ){}
  employes : Employe[] = [];
  services : Service[] = [];
  ngOnInit(): void {
    this.empService.getServices().subscribe(data => {
      this.services = data;
    });
    this.empService.getAll().subscribe(data => {
      this.employes = data;
    })
  }
  employe : Employe = {
    id : 0,
    nom : '',
    prenom : '',
    salaire : 0,
    ids: 0
  }
  add(){
    this.employe.ids = Number(this.employe.ids);
    this.empService.add(this.employe).subscribe({
      next : (data) => {
        console.log(data);
        this.router.navigate(['/employe/list']);
      },
      error : (err) => {
        console.log(err);
      }
    })
  }
}
