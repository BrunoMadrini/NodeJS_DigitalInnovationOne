import * as mongoose from 'mongoose';

class Database {

    private dburl = 'mongodb://127.0.0.1/contatos';
    private dbconnection;

    constructor() {}

    createConnection() {
        mongoose.connect(this.dburl);
        this.logger(this.dburl);

    }

    logger(url){
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log("Mongoose está conectado"))
        this.dbconnection.on('error', error => console.error.bind(console, "erro na conexão: " + error));
    }
}

export default Database;