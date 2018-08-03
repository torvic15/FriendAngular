
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Friends } from "src/app/person/person.model";

const httpOptions ={
   headers: new HttpHeaders({
       ' Content-Type' :'aplication/json',
       'Autorizathion': 'my-auth-token'
    })
};
@Injectable()
export class UserService{
    URL_BASE : string = 'http://localhost:3000/social';

    constructor (private http: HttpClient){}
    getItemList(){
        return this.http.get(this.URL_BASE);
    }
    
   addFriend(friend:Friends):Observable<Friends>{
       return this.http.post<Friends>(this.URL_BASE,friend,httpOptions);
   }
   

    
}