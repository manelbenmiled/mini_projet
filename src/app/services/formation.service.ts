import { Injectable } from '@angular/core';
import { Formation } from '../model/formation.model';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  apiURL: string = 'http://localhost:8080/formations/api';

  formations : Formation[];
  formation : Formation;
  constructor(private http : HttpClient) {
    /*this.formations = [
      {idFormation : 1, 
        nomFormation : "Angular", 
        typeFormation : "en ligne", 
        prixFormation : 100.0, 
        dateFormation : new Date("01/12/2020")},
      
        {idFormation : 2, 
          nomFormation : "Spring Boot", 
          typeFormation : "en ligne", 
          prixFormation : 150.0, 
          dateFormation : new Date("02/12/2020")},

          {idFormation : 3, 
            nomFormation : "JEE", 
            typeFormation : "en ligne", 
            prixFormation : 50.0, 
            dateFormation : new Date("03/12/2020")}
    ];*/
   }
  /* listeFormations():Formation[] {
     return this.formations;
   }*/

   listeFormations():Observable<Formation[]>{
    return this.http.get<Formation[]>(this.apiURL);
  }

   /*ajouterFormations(form: Formation){
     this.formations.push(form);
   }*/

   ajouterFormations(form: Formation): Observable<Formation>{
    return this.http.post<Formation>(this.apiURL, form, httpOptions);
  }

  /*supprimerFormation(form : Formation){
     //supprimer la formation form du tableau formations 
     const index = this.formations.indexOf(form, 0); 
     if (index > -1) { 
       this.formations.splice(index, 1); 
      } 
      //ou Bien 
      /* this.formations.forEach((cur, index) => { 
        if(form.idFormation === cur.idFormation){ 
          this.formations.splice(index, 1); 
        } 
      }); 
      */
  
     supprimerFormation(id : number) { 
       const url = `${this.apiURL}/${id}`; 
       return this.http.delete(url, httpOptions); 
      }

   consulterFormation(id: number ): Observable <Formation>{
    const url = `${this.apiURL}/${id}`; 
    return this.http.get<Formation>(url);
   }

   trierFormations(){ 
     this.formations = this.formations.sort((n1,n2) => { 
       if (n1.idFormation > n2.idFormation) 
       { 
         return 1; 
        } 
        if (n1.idFormation < n2.idFormation) {
           return -1; 
          } 
          return 0; 
        }); 
      }

   updateFormation(f: Formation) : Observable<Formation>
   { 
     // console.log(f); 
     //this.supprimerFormation(f); 
     //this.ajouterFormations(f); 
     //this.trierFormations();
     return this.http.put<Formation>(this.apiURL, f, httpOptions);
    }

}
