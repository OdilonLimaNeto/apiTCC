import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuario1615511845956 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuario',
                columns: [

                    {
                        name: 'id',
                        type: 'varchar',
                        isUnique: true,
                        isPrimary: true
                    },

                    {
                        name: 'primeiro_nome',
                        type: 'varchar',

                    },

                    {
                        name: 'segundo_nome',
                        type: 'varchar',

                    },

                    {
                        name: 'email',
                        type: 'varchar',
                    },

                    {
                        name: 'senha',
                        type: 'varchar',
                    },

                    {
                        name: 'cpf',
                        type: 'varchar',
                    },

                    {
                        name: 'id_cargo',
                        type: 'varchar',
                        isUnique: true,
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
                        name: 'id_cidade',
                        type: 'varchar',
                        isUnique: true,
                    },

                    {
                        name: 'numero_residencia',
                        type: 'int',
                    },

                    {
                        name: 'complemento',
                        type: 'varchar',
                    },

                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],

                foreignKeys: [
                    {
                        name: 'FKCargo',
                        referencedTableName: 'cargo',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_cargo']
                    },

                    {
                        name: 'FKCidade',
                        referencedTableName: 'cidade',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_cidade']
                    }
                ]
            })
        );
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
