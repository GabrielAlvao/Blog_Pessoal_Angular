import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
   public id: number
   public data: Date
   public titulo: string
   public texto: string
   public tema: Tema
   public usuario: Usuario
}