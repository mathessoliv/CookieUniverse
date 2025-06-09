import { Bolacha } from './bolacha';
import { Cliente } from './cliente';

export class Cesta {
    codigo: number = 0;
    total: number = 0;
    cliente: Cliente = new Cliente();
    itens: Bolacha[] = [];
}
