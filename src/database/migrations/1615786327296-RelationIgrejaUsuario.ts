import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationIgrejaUsuario1615786327296 implements MigrationInterface {
    name = 'RelationIgrejaUsuario1615786327296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "igreja" ADD "usuarioId" uuid`);
        await queryRunner.query(`ALTER TABLE "igreja" ADD CONSTRAINT "UQ_d7bbcf71f4b21d22618cbb3adf2" UNIQUE ("usuarioId")`);
        await queryRunner.query(`ALTER TABLE "igreja" ADD CONSTRAINT "FK_d7bbcf71f4b21d22618cbb3adf2" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "igreja" DROP CONSTRAINT "FK_d7bbcf71f4b21d22618cbb3adf2"`);
        await queryRunner.query(`ALTER TABLE "igreja" DROP CONSTRAINT "UQ_d7bbcf71f4b21d22618cbb3adf2"`);
        await queryRunner.query(`ALTER TABLE "igreja" DROP COLUMN "usuarioId"`);
    }

}
