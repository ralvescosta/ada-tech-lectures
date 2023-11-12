class Arquivo {}

class ProcessadorDeArquivo {
    public caminho: string;

    constructor(caminho: string) {
        this.caminho = caminho;
    }

    public abrirArquivo(): Arquivo {
      return new Arquivo()
    }

    public lerArquivo(): string {
        return "conteúdo";
    }

    public *letLinhaPorLinha(): Generator<string> {
        yield "1"
        yield "2"
        yield "3"
        yield "4"
        yield "5"
    }

    public transformarDados(data: string): string {
        return `transformado ${data}`;
    }

    public salvar(data: string) {
        // Save file logic (badly implemented)
    }
}