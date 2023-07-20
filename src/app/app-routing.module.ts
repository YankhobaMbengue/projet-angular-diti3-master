import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './employe/add/add.component';
import { EditComponent } from './employe/edit/edit.component';
import { ListComponent } from './employe/list/list.component';

const routes: Routes = [
  {path: "employe/add", component: AddComponent},
  {path: "employe/edit/:id", component: EditComponent},
  {path: "employe/list", component: ListComponent},
  {path: "", redirectTo: "employe/list", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
