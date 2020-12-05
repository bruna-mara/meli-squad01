import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';

import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 
  { path: 'login', component: LoginComponent },

  { path: 'meu-perfil', component: MeuPerfilComponent },
  { path: 'cadastro-tema', component: PostTemaComponent },
  { path: 'editar-tema/:id', component: PutTemaComponent },
  { path: 'deletar-tema/:id', component: DeleteTemaComponent },
  { path: 'editar-postagem/:id', component: PutPostagemComponent },
  { path: 'deletar-postagem/:id', component: DeletePostagemComponent },
  { path: 'sobre-nos', component: SobreNosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
