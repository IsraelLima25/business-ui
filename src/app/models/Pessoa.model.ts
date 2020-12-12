import { Endereco } from './Endereco.model';

export class Pessoa {    
    public codigo: number;
    public ativo: boolean = true;
    public nome: string;
    public endereco = new Endereco();
}
