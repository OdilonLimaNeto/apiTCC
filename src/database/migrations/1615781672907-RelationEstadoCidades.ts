import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationEstadoCidades1615781672907 implements MigrationInterface {
    name = 'RelationEstadoCidades1615781672907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cidade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "estadoId" uuid, CONSTRAINT "PK_9fefdadd1d47000e7fa6d2abc8c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cidade" ADD CONSTRAINT "FK_2ec6c38998b498e9f517a6c8399" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cidade" DROP CONSTRAINT "FK_2ec6c38998b498e9f517a6c8399"`);
        await queryRunner.query(`DROP TABLE "cidade"`);
    }

}
