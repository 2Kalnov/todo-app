import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddTimestampsToTasks1610305832419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tasks', new TableColumn({
            name: 'createdAt',
            type: 'date',
            default: 'CURRENT_TIMESTAMP'
        }));

        await queryRunner.addColumn('tasks', new TableColumn({
            name: 'updatedAt',
            type: 'date',
            default: 'CURRENT_TIMESTAMP'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('tasks', 'createdAt')
        await queryRunner.dropColumn('tasks', 'updatedAt')
    }
}
