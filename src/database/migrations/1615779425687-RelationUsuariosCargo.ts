import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationUsuariosCargo1615779425687 implements MigrationInterface {
    name = 'RelationUsuariosCargo1615779425687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "primaryuName" character varying NOT NULL, "secondName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "rua" character varying NOT NULL, "bairro" character varying NOT NULL, "homeNumber" integer NOT NULL, "complement" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "cargoId" uuid, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cargo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_1af8b2a790f35aedbe7e3da4199" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "FK_7db14c51775d26f3fdbd0a88cde" FOREIGN KEY ("cargoId") REFERENCES "cargo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "FK_7db14c51775d26f3fdbd0a88cde"`);
        await queryRunner.query(`DROP TABLE "cargo"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
