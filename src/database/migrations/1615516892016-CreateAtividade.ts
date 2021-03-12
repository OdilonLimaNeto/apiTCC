import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAtividade1615516892016 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'atividade',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isUnique: true
                    },

                    {
                        name: 'id_tipo_atividade',
                        type: 'int',
                        isUnique: true
                    },

                    {
                        name: 'id_igreja',
                        type: 'int',
                        isUnique: true
                    },

                    {
                        name: 'data_atividade',
                        type: 'date',
                    },

                    {
                        name: 'hora_inicio_atividade',
                        type: 'time'
                    },

                    {
                        name: 'hora_termino_atividade',
                        type: 'time'
                    },

                    {
                        name: 'quantidade_visitantes_atividade',
                        type: 'int'
                    },

                    {
                        name: 'quantidade_membros_atividade',
                        type: 'int'
                    },

                    {
                        name: 'tema_atividade',
                        type: 'varchar'
                    },

                    {
                        name: 'responsavel_atividade',
                        type: 'varchar'
                    },

                    {
                        name: 'dizimo_atividade',
                        type: 'decimal'
                    },

                    {
                        name: 'oferta_atividade',
                        type: 'decimal'
                    },

                    {
                        name: 'numero_conciliacao_atividade',
                        type: 'int'
                    },

                    {
                        name: 'numero_decisao_atividade',
                        type: 'int'
                    },


                    {
                        name: 'nome_preleitor_atividade',
                        type: 'varchar'
                    },

                    {
                        name: 'observacao_atividade',
                        type: 'varchar'
                    },

                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],

                foreignKeys: [
                    {
                        name: 'FKTipo_atividade',
                        referencedTableName: 'tipo_atividade',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_tipo_atividade']
                    },

                    {
                        name: 'FKIgreja',
                        referencedTableName: 'igreja',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_igreja']
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('atividade');
    }
}
