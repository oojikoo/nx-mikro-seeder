import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { User } from '../../../domain/user.entity';

export class UserSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const userRepo = em.getRepository(User);
    const newUser = userRepo.create({
      name: 'test',
      email: 'test@test.com',
    });
    await em.persist(newUser);
  }

}
