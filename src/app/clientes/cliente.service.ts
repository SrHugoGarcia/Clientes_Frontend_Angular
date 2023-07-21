import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
//para async
import { Observable,of,map,catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

//import { formatDate } from '@angular/common';
//lo convierte en observable 
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string='http://localhost:3000/api/v1/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient,private router: Router) { }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.http.get<{ data: { clientes: any[] }}>(this.urlEndPoint)
    .pipe(
      map((response) =>response.data.clientes.map(clienteJson => new Cliente(
        clienteJson.id,
        clienteJson.nombre,
        clienteJson.apellido,
        clienteJson.createAt,
        clienteJson.email
      ))),
      catchError((error) => {
        return throwError(() => error.error);
      }) 
    );
  }
  create(cliente:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint,
      { 
        nombre:cliente.getName(),
        apellido: cliente.getLastname(),
        email: cliente.getEmail()},{headers:this.httpHeaders})
        .pipe(
          map((response:any) =>new Cliente(
            response.data.cliente.id,
            response.data.cliente.nombre,
            response.data.cliente.apellido,
            response.data.cliente.createAt,
            response.data.cliente.email
          )),
          catchError((error) => {
            return throwError(() => error.error);
          }) 
      );
  }

  getCliente(id : number): Observable<Cliente>{
      return this.http.get<Cliente>(this.urlEndPoint.concat('/').concat(id.toString()))
      .pipe(
        map((response: any) => {
          // Realiza aquí el mapeo de propiedades del JSON a los atributos de la clase Cliente
          return new Cliente(response.data.cliente.id,response.data.cliente.nombre,
            response.data.cliente.apellido,response.data.cliente.createAt,response.data.cliente.email);
        }),
      catchError((error) => {
        this.router.navigate(['/clientes'])
        // Luego, puedes decidir cómo deseas manejar el error y retornar un valor predeterminado o lanzar una excepción personalizada.
        // En este caso, simplemente reenviaré el error usando throwError.
        return throwError(() => error.error);
      }) 
      );
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.urlEndPoint.concat('/').concat(cliente.id.toString()),
    { 
      id: cliente.getId,
      nombre:cliente.getName(),
      apellido: cliente.getLastname(),
      email: cliente.getEmail(),
      createAt: cliente.getCreateAt()
    },{headers: this.httpHeaders})
    .pipe(
      map((response:any) =>new Cliente(
        response.data.cliente.id,
        response.data.cliente.nombre,
        response.data.cliente.apellido,
        response.data.cliente.createAt,
        response.data.cliente.email
      )),
      catchError((error) => {
        return throwError(() => error.error);
      }) 
    );
  }

  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders})
    .pipe(
      catchError((error) => {
        return throwError(() => error.error);
      }) 
    );
  }

}
