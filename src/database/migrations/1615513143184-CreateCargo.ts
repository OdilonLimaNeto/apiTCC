import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCargo1615513143184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cargo',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isUnique: true,
                        isPrimary: true
                    },

                    {
                        name: 'nome',
                        type: 'varchar',
                    },

                    {
                        name: 'descricao',
                        type: 'varchar'
                    },

                    {
                        name: 'id_nivel_acesso',
                        type: 'int',
                        isUnique: true
                    },

                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],

                foreignKeys: [
                    
                    {
                        name: 'FKNivelAcesso',
                        referencedTableName: 'nivel_acesso',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_nivel_acesso']

                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cargo');
    }
}
