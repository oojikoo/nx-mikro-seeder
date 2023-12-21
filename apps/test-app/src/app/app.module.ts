import { Module, OnModuleInit } from '@nestjs/common';
import knex from 'knex';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
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
    console.log("🚀 ~ file: test.ts:15 ~ result:", result);
  }

}
