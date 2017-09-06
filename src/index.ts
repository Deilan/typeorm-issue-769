import "reflect-metadata";

import * as path from 'path';
import { createConnection, ConnectionOptions } from "typeorm";
import { SecondEntity } from "./second-entity";
import { FirstEntity } from './first-entity';

function createConnectionOptions(filePath: string, autoSchemaSync: boolean = true): ConnectionOptions {
    const result: ConnectionOptions = {
        driver: {
            type: "sqlite",
            storage: filePath,
        },
        // type: "sqlite",
        // database: "db/works.dat",
        autoSchemaSync,
        logging: {
            logQueries: true,
            logSchemaCreation: true,
            logFailedQueryError: true,
        },
        // entities: [__dirname + "/entities/{*.ts,*.js}"],
        entities: [FirstEntity, SecondEntity],
    };
    return result;
}

async function main() {
    await fetch('test1.sqlite3');
    await fetch('test1.sqlite3');
    await fetch('test1.sqlite3');
}

async function fetch(filename: string) {    
    const options = createConnectionOptions(path.resolve(__dirname, '..', filename));
    const connection = await createConnection(options);
    const repo = connection.getRepository(SecondEntity).createQueryBuilder('secondEntity');
    const result = await repo.getMany();
    await connection.close();
    return result
}

main();