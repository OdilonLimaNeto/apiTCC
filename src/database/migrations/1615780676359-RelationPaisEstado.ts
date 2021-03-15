import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationPaisEstado1615780676359 implements MigrationInterface {
    name = 'RelationPaisEstado1615780676359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pais" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a362c5bbbefe39c9187406b1917" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estado" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "ufEstado" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "paisId" uuid, CONSTRAINT "PK_be2ef64a21d36522aa1ecb24886" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "estado" ADD CONSTRAINT "FK_9016d04f7981ac3f2cb6f557d16" FOREIGN KEY ("paisId") REFERENCES "pais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estado" DROP CONSTRAINT "FK_9016d04f7981ac3f2cb6f557d16"`);
        await queryRunner.query(`DROP TABLE "estado"`);
        await queryRunner.query(`DROP TABLE "pais"`);
    }

}
