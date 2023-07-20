import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe, Service } from '../employe';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private empService : EmployeService,
    private router : Router,
    private route : ActivatedRoute
    ){}
  services : Service[] = [];
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'))
      this.getById(id)
    });
    this.empService.getServices().subscribe(data =>
      {
        this.services = data;
      }
    )
  }

  employe : Employe = {
    id : 0,
    nom : '',
    prenom : '',
    salaire : 0,
    ids : 0
  }
  getServiceName(ids : number) : string {
    const serviceName = this.services.find(s => s.id === ids);
    return serviceName ? serviceName.nom : 'Service Inconnu';
  }
  getById(id : number){
    this.empService.getById(id).subscribe((data) => {
      this.employe = data
    })
  }

  update(){
    this.employe.ids = Number(this.employe.ids);
    this.empService.update(this.employe).subscribe({
      next : (data) => {
        this.router.navigate(["/employe/list"])
      },
      error : (err) => {
        console.log(err)
      }
    })
  }
}

