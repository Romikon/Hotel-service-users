import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1752340715455 implements MigrationInterface {
    name = 'CreateUserTable1752340715455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "users_gender_enum" AS ENUM ('male', 'female');`);

        await queryRunner.query(`
            CREATE TABLE users (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email VARCHAR(255) NOT NULL unique,
            password VARCHAR(255) NOT NULL,
            city VARCHAR(100),
            gender users_gender_enum,
            age INTEGER,
            created_at TIMESTAMP DEFAULT now(),
            updated_at TIMESTAMP DEFAULT now()
        );`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users`);
        await queryRunner.query(`DROP TYPE "users_gender_enum";`);
    }

}
