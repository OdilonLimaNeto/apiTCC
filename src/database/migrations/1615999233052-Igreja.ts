import {MigrationInterface, QueryRunner} from "typeorm";

export class Igreja1615999233052 implements MigrationInterface {
    name = 'Igreja1615999233052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `igreja` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `typeChurch` int NOT NULL, `motherChurch` int NOT NULL, `amountChurchMembers` int NOT NULL, `streetChurch` varchar(255) NOT NULL, `districtChurch` varchar(255) NOT NULL, `complement` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `igreja`");
    }

}
