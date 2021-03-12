import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTipoAtividade1615516522480 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tipo_atividade',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isUnique: true
                    },

                    {
                        name: 'nome',
                        type: 'varchar'
                    },

                    {
                        name: 'modalidade',
                        type: 'varchar',
                    },

                    {
                        name: 'gera_arrecadacao_atividade',
                        type: 'int',
                        isUnique: true
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
        await queryRunner.dropTable('tipo_atividade')
    }
}
