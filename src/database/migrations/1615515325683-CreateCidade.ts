import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCidade1615515325683 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cidade',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isUnique: true,
                        isPrimary: true
                    },

                     {
                         name: 'nome',
                         type: 'varchar',
                     },

                     {
                         name: 'descricao',
                         type: 'varchar',
                     },

                     {
                         name: 'id_estado',
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
                        name: 'FKEstado',
                        referencedTableName: 'estado',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_estado']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cidade');
    }
}
