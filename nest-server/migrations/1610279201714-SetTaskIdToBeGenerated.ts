import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class SetTaskIdToBeGenerated1610279201714 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('tasks', 'id', new TableColumn({
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
