import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaçãodaTabelaDoaçãoENecessitadosCriaçãoTabelaRegistro1702056491990 implements MigrationInterface {
    name = 'CriaçãodaTabelaDoaçãoENecessitadosCriaçãoTabelaRegistro1702056491990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cadastro" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "PK_fa3788179394d7cebec2f83ef54" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cadastro"`);
    }

}
