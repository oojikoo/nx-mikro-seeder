import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { User } from '../../../domain/user.entity';
import knex from 'knex';
export class TestSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const userRepo = em.getRepository(User);
    const users = await userRepo.findAll();
    console.log("🚀 ~ file: TestSeeder.ts:10 ~ TestSeeder ~ run ~ users:", users);
    const connection = knex({
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'test_db',
        timezone: 'utc',
      },
    });
    const result = await connection('test_table').timeout(3000, { cancel: true }).select('*').limit(3).debug(true);
    console.log("🚀 ~ file: TestSeeder.ts:19 ~ TestSeeder ~ run ~ result:", result);
  }

}
