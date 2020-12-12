import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Categoria } from './Categoria.model';
import { Pessoa } from './Pessoa.model';

export class Lancamento {

    public codigo: number;
    public descricao: string;
    public dataVencimento: Date;
    public dataPagamento: Date;
    public valor: number;
    public tipo: string = 'DESPESA';
    public observacao: string;
    public categoria = new Categoria();
    public pessoa= new Pessoa(); 
        
}
