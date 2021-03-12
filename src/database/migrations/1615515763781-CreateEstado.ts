import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEstado1615515763781 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'estado',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isUnique: true,
                        isPrimary: true
                    },

                     {
                         name: 'nome',
                         type: 'varchar'
                     },

                     {
                         name: 'uf',
                         type: 'varchar',
                     },

                     {
                         name: 'descricao',
                         type: 'varchar',
                     },

                     {
                         name: 'id_pais',
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
                        name: 'FKPais',
                        referencedTableName: 'pais',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_pais']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('estado')
    }
}
