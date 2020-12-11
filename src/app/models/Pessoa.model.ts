import { Endereco } from './Endereco.model';

export class Pessoa {

    public codigo: number;
    ativo: boolean;
    nome: string;
    endereco: Endereco;

    constructor(){
        this.ativo = true;
        this.endereco = new Endereco();
    }

}
