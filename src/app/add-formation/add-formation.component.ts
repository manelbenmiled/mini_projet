import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../model/formation.model';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  newFormation = new Formation();
  constructor(private formationService: FormationService,
    private router : Router) { }

  addFormation(){
    // console.log(this.newFormation);
    this.formationService.ajouterFormations(this.newFormation).subscribe(form =>{
      console.log(form);
    });
    this.router.navigate(['formations']);
  }
  ngOnInit(): void {
  }

}
