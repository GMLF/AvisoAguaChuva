import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaçãodaTabelaDoaçãoENecessitadosCriaçãoTabelaRegistro1702240145659 implements MigrationInterface {
    name = 'CriaçãodaTabelaDoaçãoENecessitadosCriaçãoTabelaRegistro1702240145659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cadastro" ("email" character varying NOT NULL, "nome" character varying NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "PK_d5a601e8efc162d4e26b623bfb8" PRIMARY KEY ("email"))`);
        await queryRunner.query(`CREATE TABLE "necessitados" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, "endereco" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "cep" character varying NOT NULL, "listaNecessidade" text NOT NULL, "status" boolean DEFAULT true, CONSTRAINT "PK_35f270c1cf59eb8a260a47ffc15" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doacao" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, "endereco" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "cep" character varying NOT NULL, "listaDoacao" text NOT NULL, "status" boolean DEFAULT true, CONSTRAINT "PK_be774f076f428305e252206bd66" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "doacao"`);
        await queryRunner.query(`DROP TABLE "necessitados"`);
        await queryRunner.query(`DROP TABLE "cadastro"`);
    }

}
