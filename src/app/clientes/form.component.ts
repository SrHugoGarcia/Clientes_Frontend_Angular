import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
  cliente: Cliente = new Cliente();
  title: string = 'Client Information';
  description: string = 'information to create a client';
  msg: string='';
  errors: string[]=[];

  constructor(private clienteService: ClienteService, private router: Router, private activaeRoute : ActivatedRoute){
  }

  ngOnInit(): void {
    this.cargarCliente()
  }

  public create(): void {
    if(this.cliente.getId() == 0 || this.cliente.createAt == null){
    this.clienteService.create(this.cliente).subscribe(
      {
        next:cliente => { 
          this.router.navigate(['/clientes']);
          this.msg= 'Cliente creado con exito'
        },
        error:error => {
          this.errors = error.errors as string[];
          // Aquí manejas el error cuando ocurre durante la solicitud HTTP para obtener el cliente.
          console.error(error);
        }
      }
    );
  }else{
    this.update()
  }
}

  public cargarCliente(): void{
    this.activaeRoute.params.subscribe(params =>{
        let id = params['id'];
        if(id){
          this.clienteService.getCliente(id).subscribe(
            {
              next:cliente =>{
                this.cliente = cliente;
              },
              error:error => {
                console.error(error);
              }
            }
          )
        }
    });
  }
  
  public update(): void{
   this.clienteService.update(this.cliente).subscribe(
      {
        next:cliente =>{
          this.cliente = cliente;
          this.router.navigate(['/clientes']);
          this.msg = `Cliente ${cliente.getName()} ${cliente.getLastname}  actualizado con exito`;
        },
        error:error => {
          this.errors = error.errors as string[];
          console.error(error);
        }
      }
    );
  }
}

