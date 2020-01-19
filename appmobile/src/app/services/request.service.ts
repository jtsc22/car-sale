
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Branches } from '../models/branches.model';
import { Clients } from '../models/clients.model';
import { Locations } from '../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getClients(): Promise<Clients[]>  {
    return this.http.get<Clients[]>(`${environment.API_URL}clients`).pipe(
      map((res: any) => {
        let result: Clients[] = res.data;
        return result;
      })
    ).toPromise();
  }

  async createClient(data: Clients): Promise<Clients> {
    let results = await this.http.post<Clients>(`${environment.API_URL}client`, data).toPromise();
    return results;
  }

  async updateClient(data: Clients): Promise<any> {
    let results = await this.http.put(`${environment.API_URL}client`, data).toPromise();
    return results;
  }

  async deteleClient(id : any ): Promise<any> {
    let results = await this.http.delete(`${environment.API_URL}client/${id}`).toPromise();
    return results;
  }

  getBranches() : Promise<Branches[]> {
    return this.http.get<Branches[]>(`${environment.API_URL}branches`).pipe(
      map((res: any) => {
        let result: Branches[] = res.data;
        return result;
      })
    ).toPromise()
  }

  getLocations() {
    return this.http.get<Locations[]>(`${environment.API_URL}locations`).pipe(
      map((res: any) => {
        let result: Locations[] = res.data;
        return result;
      })
    ).toPromise()
  }
}
