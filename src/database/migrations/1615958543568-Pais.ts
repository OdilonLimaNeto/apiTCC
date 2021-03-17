import {MigrationInterface, QueryRunner} from "typeorm";

export class Pais1615958543568 implements MigrationInterface {
    name = 'Pais1615958543568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `pais` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `estado` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `ufEstado` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `paisId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `nivel_acesso` (`id` int NOT NULL AUTO_INCREMENT, `titleAcess` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `cargo` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `nivelAcessoId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `usuario` (`id` varchar(36) NOT NULL, `primaryuName` varchar(255) NOT NULL, `secondName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `rua` varchar(255) NOT NULL, `bairro` varchar(255) NOT NULL, `homeNumber` int NOT NULL, `complement` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `cargoId` int NULL, `cidadeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `cidade` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `estadoId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `igreja` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `typeChurch` int NOT NULL, `motherChurch` int NOT NULL, `amountChurchMembers` int NOT NULL, `streetChurch` varchar(255) NOT NULL, `districtChurch` varchar(255) NOT NULL, `complement` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `cidadeId` int NULL, `usuarioId` varchar(36) NULL, UNIQUE INDEX `REL_d7bbcf71f4b21d22618cbb3adf` (`usuarioId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tipo_atividade` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `activityModality` varchar(255) NOT NULL, `activityCollection` int NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `atividade` (`id` int NOT NULL AUTO_INCREMENT, `nameActivity` varchar(255) NOT NULL, `dateActivity` datetime NOT NULL, `startTimeActivity` timestamp NOT NULL, `finishTimeActivity` timestamp NOT NULL, `amountVisitorsActivity` int NOT NULL, `amountMembersActivity` int NOT NULL, `themeActivity` varchar(255) NOT NULL, `responsibleActivity` varchar(255) NOT NULL, `titheActivity` float NOT NULL, `ofertActivity` float NOT NULL, `reconciliationNumberAcitivity` int NOT NULL, `numberDecisionsActivity` int NOT NULL, `activitySpeaker` varchar(255) NOT NULL, `observationActivity` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `tipoAtividadeId` int NULL, `igrejaId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `estado` ADD CONSTRAINT `FK_9016d04f7981ac3f2cb6f557d16` FOREIGN KEY (`paisId`) REFERENCES `pais`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `cargo` ADD CONSTRAINT `FK_3f4917fea1f9e065ba29c9edf69` FOREIGN KEY (`nivelAcessoId`) REFERENCES `nivel_acesso`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuario` ADD CONSTRAINT `FK_7db14c51775d26f3fdbd0a88cde` FOREIGN KEY (`cargoId`) REFERENCES `cargo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuario` ADD CONSTRAINT `FK_f15ef5e406fe408e921573c7ad8` FOREIGN KEY (`cidadeId`) REFERENCES `cidade`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `cidade` ADD CONSTRAINT `FK_2ec6c38998b498e9f517a6c8399` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_18bf736affb8d577924a81c08b6` FOREIGN KEY (`cidadeId`) REFERENCES `cidade`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_d7bbcf71f4b21d22618cbb3adf2` FOREIGN KEY (`usuarioId`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_a0245a630daf770118a1206916c` FOREIGN KEY (`tipoAtividadeId`) REFERENCES `tipo_atividade`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_842d667338e4f865ea968f8b119` FOREIGN KEY (`igrejaId`) REFERENCES `igreja`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_842d667338e4f865ea968f8b119`");
        await queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_a0245a630daf770118a1206916c`");
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_d7bbcf71f4b21d22618cbb3adf2`");
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_18bf736affb8d577924a81c08b6`");
        await queryRunner.query("ALTER TABLE `cidade` DROP FOREIGN KEY `FK_2ec6c38998b498e9f517a6c8399`");
        await queryRunner.query("ALTER TABLE `usuario` DROP FOREIGN KEY `FK_f15ef5e406fe408e921573c7ad8`");
        await queryRunner.query("ALTER TABLE `usuario` DROP FOREIGN KEY `FK_7db14c51775d26f3fdbd0a88cde`");
        await queryRunner.query("ALTER TABLE `cargo` DROP FOREIGN KEY `FK_3f4917fea1f9e065ba29c9edf69`");
        await queryRunner.query("ALTER TABLE `estado` DROP FOREIGN KEY `FK_9016d04f7981ac3f2cb6f557d16`");
        await queryRunner.query("DROP TABLE `atividade`");
        await queryRunner.query("DROP TABLE `tipo_atividade`");
        await queryRunner.query("DROP INDEX `REL_d7bbcf71f4b21d22618cbb3adf` ON `igreja`");
        await queryRunner.query("DROP TABLE `igreja`");
        await queryRunner.query("DROP TABLE `cidade`");
        await queryRunner.query("DROP TABLE `usuario`");
        await queryRunner.query("DROP TABLE `cargo`");
        await queryRunner.query("DROP TABLE `nivel_acesso`");
        await queryRunner.query("DROP TABLE `estado`");
        await queryRunner.query("DROP TABLE `pais`");
    }

}
