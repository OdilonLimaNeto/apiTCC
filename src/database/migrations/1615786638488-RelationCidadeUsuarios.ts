import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCidadeUsuarios1615786638488 implements MigrationInterface {
    name = 'RelationCidadeUsuarios1615786638488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" ADD "cidadeId" uuid`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "FK_f15ef5e406fe408e921573c7ad8" FOREIGN KEY ("cidadeId") REFERENCES "cidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "FK_f15ef5e406fe408e921573c7ad8"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "cidadeId"`);
    }

}
