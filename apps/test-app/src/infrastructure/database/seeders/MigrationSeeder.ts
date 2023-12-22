import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { User } from '../../../domain/user.entity';
import knex from 'knex';
export class MigrationSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const userRepo = em.getRepository(User);
    const users = await userRepo.findAll();
    console.log("🚀 ~ file: TestSeeder.ts:10 ~ TestSeeder ~ run ~ users:", users);
    const connection = knex({
      client: 'mysql',
      connection: {
        host: process.env.LEGACY_HOST,
        port: 3306,
        user: process.env.LEGACY_USER,
        password: process.env.LEGACY_PASSWORD,
        database: process.env.LEGACY_DB_NAME,
        timezone: 'utc',
      },
    });
    const result = await connection(process.env.LEGACY_TABLE).timeout(3000, { cancel: true }).select('*').limit(3).debug(true);
    console.log("🚀 ~ file: TestSeeder.ts:19 ~ TestSeeder ~ run ~ result:", result);
  }

}
