import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactions1642345273858 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "description",
            type: "varchar(500)",
          },
          {
            name: "amount",
            type: "decimal(10,2)",
          },
          {
            name: "date",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "type",
            type: "varchar(10)",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions");
  }
}
