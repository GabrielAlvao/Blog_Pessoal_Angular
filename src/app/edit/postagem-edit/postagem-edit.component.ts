import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {
  tema: Tema= new Tema()
  listaTemas: Tema[]
  idTema: number
  postagem: Postagem = new Postagem()
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemservice: PostagemService,
    private temaservice: TemaService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findAllTemas()
}
findByIdPostagem(id: number){
  this.postagemservice.getByIdPostagem(id).subscribe((resp: Postagem)=>{
    this.postagem = resp
  })
}
findByIdTema(){
  this.temaservice.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
    this.tema = resp
  })
}
findAllTemas(){
  this.temaservice.getAllTemas().subscribe((resp: Tema[])=>{
  this.listaTemas = resp
  })
}
atualizar(){
  this.tema.id = this.idTema
  this.postagem.tema = this.tema
  this.postagemservice.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
  this.postagem = resp
  alert('Postagem atualizada com sucesso')
  this.router.navigate(['/inicio'])
  })
}
}
