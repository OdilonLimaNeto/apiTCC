import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationAtividadesTipoAtividade1615784905398 implements MigrationInterface {
    name = 'RelationAtividadesTipoAtividade1615784905398'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tipo_atividade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "activityModality" character varying NOT NULL, "activityCollection" integer NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_642cc5373cbaf782153ce698fc4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "atividade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nameActivity" character varying NOT NULL, "dateActivity" TIMESTAMP NOT NULL, "startTimeActivity" TIMESTAMP NOT NULL, "finishTimeActivity" TIMESTAMP NOT NULL, "amountVisitorsActivity" integer NOT NULL, "amountMembersActivity" integer NOT NULL, "themeActivity" character varying NOT NULL, "responsibleActivity" character varying NOT NULL, "titheActivity" double precision NOT NULL, "ofertActivity" double precision NOT NULL, "reconciliationNumberAcitivity" integer NOT NULL, "numberDecisionsActivity" integer NOT NULL, "activitySpeaker" character varying NOT NULL, "observationActivity" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tipoAtividadeId" uuid, CONSTRAINT "PK_b06f518d68d61a858de079cb1be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "atividade" ADD CONSTRAINT "FK_a0245a630daf770118a1206916c" FOREIGN KEY ("tipoAtividadeId") REFERENCES "tipo_atividade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "atividade" DROP CONSTRAINT "FK_a0245a630daf770118a1206916c"`);
        await queryRunner.query(`DROP TABLE "atividade"`);
        await queryRunner.query(`DROP TABLE "tipo_atividade"`);
    }

}
