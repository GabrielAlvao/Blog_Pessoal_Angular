import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  nome: string = environment.nome
  foto: string = environment.foto

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.id = 0
    environment.foto = ''
    environment.nome = ''
    environment.tipo = ''
  }
}
