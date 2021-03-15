import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCargosNivelAcesso1615779672281 implements MigrationInterface {
    name = 'RelationCargosNivelAcesso1615779672281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nivel_acesso" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titleAcess" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fe30169bedc2559a470101b3faa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "nivelAcessoId" uuid`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD CONSTRAINT "FK_3f4917fea1f9e065ba29c9edf69" FOREIGN KEY ("nivelAcessoId") REFERENCES "nivel_acesso"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cargo" DROP CONSTRAINT "FK_3f4917fea1f9e065ba29c9edf69"`);
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "nivelAcessoId"`);
        await queryRunner.query(`DROP TABLE "nivel_acesso"`);
    }

}
