import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../model/formation.model';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styles: []
})
export class UpdateFormationComponent implements OnInit {

  currentFormation = new Formation();
  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private formationService: FormationService) {}

  ngOnInit(){
    // console.log(this.route.snapshot.params.id);
    /*this.currentFormation = this.formationService.consulterFormation(this.activatedRoute.snapshot.params.id);
    console.log(this.currentFormation);*/
    this.formationService.consulterFormation(this.activatedRoute.snapshot.params.id). subscribe( 
      form =>{ this.currentFormation = form; 
      } 
      );
  }

  updateFormation() { 
    //console.log(this.currentFormation); 
    this.formationService.updateFormation(this.currentFormation).subscribe(prod => {
    this.router.navigate(['formations']); 
  },(error) => { alert("Problème lors de la modification !"); } 
  );
  }

}
