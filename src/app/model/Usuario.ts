import { Postagem } from "./Postagem"

export class Usuario{
    public id: number
    public nome: string
    public usuario: string
    public foto: string
    public tipo: string
    public dataNascimento: Date
    public senha: string
    public postagem: Postagem[]
}