import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from 'src/app/models/employee.model';
import {Observable} from 'rxjs';




@Injectable()
export class FormPoster{
    constructor(private _http:HttpClient){

    }

    postEmployeeForm(employee:Employee):Observable<any>{
        console.log('posting employee data ', employee);
        return this._http.post('http://localhost:3004/postemployee',employee);
        //return this._http.post('http://localhost:8400/addResturant',reaturatData);
    }
}
