import { DataSource } from "typeorm";
import { User } from "../model/entities/User.entity";

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "geneasur",
    entities: [User],
    synchronize: true,
    logging: false,
})