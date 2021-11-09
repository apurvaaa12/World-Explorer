import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User} from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private status: any;

  logoutSubject!: BehaviorSubject<boolean> ;
  constructor(private http:HttpClient) { }
  setStatus (status:any)
    {
      this.status=status;
    }

    getStatus() : boolean
    {
      
      return this.status;
    }
    setBearerToken(token:any)
    { 
      localStorage.setItem('bearerToken',token);

    }
    getBearerToken()
    {
      return localStorage.getItem('bearerToken');
    }
    setUserId(email:string){
      sessionStorage.setItem('emailId',email);
    }
    getUserId(){
      return sessionStorage.getItem('emailId');
    }
    CheckAuthentication(token: any): Promise<any> {
      return this.http.post(`http://localhost:8081/api/v1/World/login/token`, {}, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
      }).toPromise();
    }
  
    validateUser(email : string,password:string) : Observable<User>
  {
    return this.http.get<User>(`http://localhost:8081/api/v1/World/login/${email}/${password}`);
  }

  addUser(user:User): Observable<User>{
    return this.http.post<User>("http://localhost:8081/api/v1/World/addUser",user);
  }

  updateUser(user: User){  
    const bearerToken = this.getBearerToken();
    return this.http.put("http://localhost:8081/api/v1/World/updateUser/" + user.email, user,{
      headers: new HttpHeaders().set("Authorization",`Bearer ${bearerToken}`)
    });  
  }
  logout(){
    return this.http.get<User>("http://localhost:8081/api/v1/World/logout");
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
