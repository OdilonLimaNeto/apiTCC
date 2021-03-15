import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCidadeIgrejas1615785763795 implements MigrationInterface {
    name = 'RelationCidadeIgrejas1615785763795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "igreja" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "typeChurch" integer NOT NULL, "motherChurch" integer NOT NULL, "amountChurchMembers" integer NOT NULL, "streetChurch" character varying NOT NULL, "districtChurch" character varying NOT NULL, "complement" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "cidadeId" uuid, CONSTRAINT "PK_19ded05c0de2d2dd549c4d7216a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "igreja" ADD CONSTRAINT "FK_18bf736affb8d577924a81c08b6" FOREIGN KEY ("cidadeId") REFERENCES "cidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "igreja" DROP CONSTRAINT "FK_18bf736affb8d577924a81c08b6"`);
        await queryRunner.query(`DROP TABLE "igreja"`);
    }

}
