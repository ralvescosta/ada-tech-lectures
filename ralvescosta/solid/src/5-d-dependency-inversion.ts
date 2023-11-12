// Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. 
// As abstrações não devem depender de detalhes. Os detalhes devem depender de abstrações.

// Registrar Compra
// Atualizar Estoque
// Interface Gráfica
// Persistência (Database)

// Log
interface Logger {
    log(message: string): void;
}

class App {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    doSomething() {
        this.logger.log("Doing something...");
    }
}

class FileLogger implements Logger {
    log(message: string) {
        // Log to a file
    }
}

const fileLogger = new FileLogger();
const app = new App(fileLogger);