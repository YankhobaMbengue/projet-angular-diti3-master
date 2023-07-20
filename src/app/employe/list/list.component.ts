import { Component, OnInit } from '@angular/core';
import { Employe, Service } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employes : Employe[] = [];
  services : Service[] = [];
  searchBY : any;
  constructor(private empService : EmployeService){}

  ngOnInit(): void {
    this.empService.getAll().subscribe(data => 
      {
        this.employes = data
      }
    );
    this.empService.getServices().subscribe(data => 
      {
        this.services = data
      }
    );
  }
  getfilteredEmployes() {
    if (this.searchBY) {
      const lowerCaseSearchText = this.searchBY.toLowerCase();
      return this.employes.filter(
        e =>
          e.prenom.toLowerCase().startsWith(lowerCaseSearchText) ||
          e.nom.toLowerCase().startsWith(lowerCaseSearchText) ||
          e.salaire.toString().startsWith(this.searchBY) ||
          this.getServiceName(e.ids).toLowerCase().startsWith(lowerCaseSearchText)
      );
    } else {
      return this.employes;
    }
  }
  getServiceName(ids : number) : string {
    const serviceName = this.services.find(s => s.id === ids);
    return serviceName ? serviceName.nom : 'Service Inconnu';
  }
  delete(id : number){
    let conf = confirm("Voulez-vous supprimer cet employe d'ID : " + id);
    if(conf){
      this.empService.delete(id).subscribe({
        next : (data) => {
          this.employes = this.employes.filter(e => e.id != id)
        }
      });
    }
  }
}
