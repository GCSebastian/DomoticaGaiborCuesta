import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cl1: string = "light"; // Inicialmente establecido en "light"
  cl2: string = "light"; 
  cl3: string = "light"; 
  cl4: string = "light"; 
  cl5: string = "light"; 
  cl6: string = "light"; 
  constructor(private database: Database) {}

  ngOnInit() {
    const route = ref(this.database, "/casa/dormitorio");
    const route1 = ref(this.database, "/casa/atico");
    const route2 = ref(this.database, "/casa/sala");
    const route3 = ref(this.database, "/casa/comedor");
    const route4 = ref(this.database, "/casa/patio");
    const route5 = ref(this.database, "/casa/recepcion");


    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);
      if (valores_db === true) {
        this.cl1 = "warning"; // Actualizar el valor de cl1 a "warning" si se cumple la condición
      } 
    });

    object(route1).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);
      if (valores_db === true) {
        this.cl2 = "warning"; // Actualizar el valor de cl1 a "warning" si se cumple la condición
      } 
    });


    object(route2).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);
      if (valores_db === true) {
        this.cl3 = "warning"; // Actualizar el valor de cl1 a "warning" si se cumple la condición
      } 
    });


    object(route3).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);
      if (valores_db === true) {
        this.cl4 = "warning"; // Actualizar el valor de cl1 a "warning" si se cumple la condición
      } 
    });


    object(route4).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);
      if (valores_db === true) {
        this.cl5 = "warning"; // Actualizar el valor de cl1 a "warning" si se cumple la condición
      } 
    });

    
    object(route5).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);
      if (valores_db === true) {
        this.cl6 = "warning"; // Actualizar el valor de cl1 a "warning" si se cumple la condición
      } 
    });

    
  }

    
  }



  


