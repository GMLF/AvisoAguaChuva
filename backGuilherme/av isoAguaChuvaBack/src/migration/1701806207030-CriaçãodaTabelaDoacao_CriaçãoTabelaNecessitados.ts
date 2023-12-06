import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaçãodaTabelaDoacaoCriaçãoTabelaNecessitados1701806207030 implements MigrationInterface {
    name = 'CriaçãodaTabelaDoacaoCriaçãoTabelaNecessitados1701806207030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doacao" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, "endereco" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "cep" character varying NOT NULL, "listaDoacao" text NOT NULL, CONSTRAINT "PK_be774f076f428305e252206bd66" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "necessitados" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, "endereco" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "cep" character varying NOT NULL, "listaNecessidade" text NOT NULL, CONSTRAINT "PK_35f270c1cf59eb8a260a47ffc15" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "necessitados"`);
        await queryRunner.query(`DROP TABLE "doacao"`);
    }

}
