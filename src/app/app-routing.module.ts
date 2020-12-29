import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationsComponent } from './formations/formations.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';

const routes: Routes = [
  {path: "formations", component : FormationsComponent},
  {path: "add-formation", component : AddFormationComponent},
  {path: "", redirectTo: "formations", pathMatch: "full"},
  {path: "updateFormation/:id", component: UpdateFormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
