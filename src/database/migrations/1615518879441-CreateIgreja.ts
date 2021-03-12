import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateIgreja1615518879441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'igreja',
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
                        name: 'cnpj',
                        type: 'varchar',
                    },

                    {
                        name: 'email',
                        type: 'varchar',
                    },

                    {
                        name: 'tipo_igreja',
                        type: 'int',
                    },

                    {
                        name: 'matriz_igreja',
                        type: 'int',
                    },

                    {
                        name: 'quantidade_membro_igreja',
                        type: 'int',
                    },

                    {
                        name: 'rua',
                        type: 'varchar',
                    },

                    {
                        name: 'bairro',
                        type: 'varchar',
                    },

                    {
                        name: 'cep',
                        type: 'varchar',
                    },

                    {
                        name: 'numero_residencia_igreja',
                        type: 'int',
                    },

                    {
                        name: 'complemento',
                        type: 'varchar',
                    },

                    {
                        name: 'id_cidade_igreja',
                        type: 'int',
                    },

                    {
                        name: 'id_usuario',
                        type: 'int',
                    },

                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],

                foreignKeys: [
                    {
                        name: 'FKUsuario',
                        referencedTableName: 'usuario',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_usuario']
                    },

                    {
                        name: 'FKCidadeIgreja',
                        referencedTableName: 'cidade',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_cidade_igreja']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('igreja');
    };
}
