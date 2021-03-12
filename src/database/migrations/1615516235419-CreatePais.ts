import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePais1615516235419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pais',
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
                        type: 'varchar'
                    },

                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pais');
    }
}
