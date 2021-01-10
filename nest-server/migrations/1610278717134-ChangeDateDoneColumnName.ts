import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeDateDoneColumnName1610278717134 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('tasks', 'dateDone', 'doneDate');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('tasks', 'doneDate', 'dateDone');
    }

}
