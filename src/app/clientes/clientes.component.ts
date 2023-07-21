import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit{
  clientes: Cliente[] = [];
  title: string = 'Users';
  description: string = 'List of all available users';
  //private clienteService: ClienteService;

  /*constructor(clienteService: ClienteService){
    this.clienteService = clienteService;
  }*/

  //Inyeccion de dependencias, cuando se usa se configura el provider
  constructor(private clienteService: ClienteService){
  }

  //cuando inicia el componente
  ngOnInit(){
    this.clienteService.getClientes().subscribe(
      {
        next:clientes => {
          this.clientes = clientes
          console.log(this.clientes);
        },
        error:error=>{console.log(error)}
    });
  }

  public delete(cliente: Cliente):void{
    this.clientes = this.clientes.filter(c=>c !== cliente );
    this.clienteService.delete(cliente.getId()).subscribe(
      {
        next:response=>{console.log("Eliminado")},
        error:error=>{console.log(error)}
      });
  }

}

