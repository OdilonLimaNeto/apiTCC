import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNivelAcesso1615506812313 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'nivel_acesso',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isUnique: true,
                        isPrimary: true,
                    },
                    {
                        name: 'titulo_acesso',
                        type: 'varchar',
                    },
                    {
                        name: 'tipo_acesso',
                        type: 'int'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('nivel_acesso');
    }
}