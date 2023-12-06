import "reflect-metadata"
import "dotenv/config"
import { DataSource,DataSourceOptions} from "typeorm"

export const dataSourceConfig =():DataSourceOptions=>{
    const dburl: string|undefined=process.env.DATABASE_URL
    return{
        type:"postgres",
        url:dburl,
        logging:true,
        entities: ["./src/entity/{ts,js}"],
        migrations: ['./src/migration/{ts,js}'],
    }
}
export const AppDataSource = new DataSource(dataSourceConfig())

