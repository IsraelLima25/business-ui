import { Categoria } from './Categoria.model';
import { Pessoa } from './Pessoa.model';

export class Lancamento {

    categoria: Categoria;
    codigo: number;
    dataPagamento: Date;
    dataVencimento: Date;
    descricao: string;
    observacao: string;
    pessoa: Pessoa;
    tipo: string;
    valor: number;
}
