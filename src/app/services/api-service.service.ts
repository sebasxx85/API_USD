import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string = 'https://mindicador.cl/api';

  constructor(
    private http: HttpClient
  ) { }

  obtenerValoresAPI(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  obtenerValorUSD(): Observable<any> {
    return this.http.get<any>(this.url+'/dolar');
  }

  obtenerValorUF(anio: any): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/uf'+ '/'+ anio);
  }

  obtenerValorUSDFecha(fecha: any): Observable<any> {
    return this.http.get<any[]>(this.url+'/dolar'+ '/'+ fecha);
  }




}
