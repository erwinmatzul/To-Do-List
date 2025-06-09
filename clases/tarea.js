export class Tarea {
    constructor(texto, categoria) {
        this.id = crypto.randomUUID();
        this.texto = texto;
        this.categoria = categoria;
        this.completado = false;
    }
}
