import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../model/formation.model';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations : Formation[];
  constructor(private formationService: FormationService,
    private router : Router) {
    //this.formations = formationService.listeFormations();
   }

  ngOnInit(): void {
    this.formationService.listeFormations().subscribe(
      form => { console.log(form); 
        this.formations = form; });
  }

  supprimerFormation(f : Formation){
    //console.log(f);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.formationService.supprimerFormation(f.idFormation).subscribe(() => { 
    console.log("formation supprimé");  
    this.SupprimerFormationDuTableau(f);
    });
  }

  SupprimerFormationDuTableau(form : Formation) { 
    this.formations.forEach((cur, index) => { 
      if(form.idFormation=== cur.idFormation) { 
        this.formations.splice(index, 1); 
      } 
    }); 
  }

}
