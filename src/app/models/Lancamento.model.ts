import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Categoria } from './Categoria.model';
import { Pessoa } from './Pessoa.model';

export class Lancamento {

    public codigo: number;
    public descricao: string;
    public dataVencimento: string;
    public dataPagamento: string;
    public valor: number;
    public tipo: string;
    public observacao: string;
    public categoria: Categoria;
    public pessoa: Pessoa;

    constructor(){        
        this.tipo = 'DESPESA';
        this.observacao = '';
        this.categoria = new Categoria();
        this.pessoa = new Pessoa();
    }
        
}
