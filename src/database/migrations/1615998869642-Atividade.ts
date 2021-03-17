import {MigrationInterface, QueryRunner} from "typeorm";

export class Atividade1615998869642 implements MigrationInterface {
    name = 'Atividade1615998869642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `atividade` (`id` varchar(36) NOT NULL, `nameActivity` varchar(255) NOT NULL, `dateActivity` datetime NOT NULL, `startTimeActivity` timestamp NOT NULL, `finishTimeActivity` timestamp NOT NULL, `amountVisitorsActivity` int NOT NULL, `amountMembersActivity` int NOT NULL, `themeActivity` varchar(255) NOT NULL, `responsibleActivity` varchar(255) NOT NULL, `titheActivity` float NOT NULL, `ofertActivity` float NOT NULL, `reconciliationNumberAcitivity` int NOT NULL, `numberDecisionsActivity` int NOT NULL, `activitySpeaker` varchar(255) NOT NULL, `observationActivity` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `atividade`");
    }

}
