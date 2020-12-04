import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {


  postagem: Postagem = new Postagem()
  idPost: number

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  usuario: User = new User()
  nomeUser: string



  constructor(
    private temaService: TemaService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)


    this.findAllTemas()
  }

  salvar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema


    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.router.navigate(['/feed'])
      this.alert.showAlertSuccess('Postagem alterada com sucesso')
    }, err => {
      if (err.status == '500') {
        this.alert.showAlertDanger('Preencha todos os campos corretamente antes de enviar!')
      }
    })
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }







}
