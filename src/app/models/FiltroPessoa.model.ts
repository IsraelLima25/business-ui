import { Pagina } from "./Pagina.model";

export class FiltroPessoa {

    public nome: string;
    public pagina: Pagina;

    constructor(){
        this.pagina = new Pagina();
    }
}