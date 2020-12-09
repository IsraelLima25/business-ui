import { Endereco } from './Endereco.model';

export interface Pessoa {

    codigo: number;
    ativo: boolean;
    nome: string;
    endereco: Endereco;

}
