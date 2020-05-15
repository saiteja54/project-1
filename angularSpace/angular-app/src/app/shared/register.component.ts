import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { FormPoster } from 'src/app/shared/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  languages = ['English', 'Hindi','Spanish','default'];
  model = new Employee('','', true,'','');
  hasPrimaryLanguageError :boolean = false;

  constructor(private _formPoster:FormPoster){
    
  }
  
  firstNameToUppercase(value:string){

    // bhumika >>>  
    // value.charAt(0).toUpperCase() >>  B
    // value.slice(1) >>> humika
    if(value.length > 0){
      console.log('initial value  ',this.model.firstName);
      this.model.firstName =value.charAt(0).toUpperCase() + value.slice(1) ;

      console.log('value.charAt(0).toUpperCase()  ' + value.charAt(0).toUpperCase());
      console.log('final value  ',this.model.firstName);
    }
    else{
      this.model.firstName = value;
    }
  }


  validatePrimaryLanguage(event){
    console.log("Selected Langauge ::: "+ this.model.primaryLanguage);
    if(this.model.primaryLanguage === 'default'){
      this.hasPrimaryLanguageError = true;
    }
    else{
      this.hasPrimaryLanguageError = false;
    }
  }

  submitForm(form:NgForm){
    console.log('Data inside component ::', form.value);
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if(this.hasPrimaryLanguageError){
      return
    }
    this._formPoster.postEmployeeForm(this.model).subscribe(
      ((res)=>console.log('data poster'))
    );
  }
 

}
