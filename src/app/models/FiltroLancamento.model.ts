import { Pagina } from './Pagina.model';

export class FiltroLancamento {
    public descricao: string;
    public dataVencimentoDe: Date;
    public dataVencimentoAte: Date;
    public pagina: Pagina;

    constructor () {
        this.pagina = new Pagina();
    }

}
