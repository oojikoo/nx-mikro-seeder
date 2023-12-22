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
        host: process.env.LEGACY_HOST,
        port: 3306,
        user: process.env.LEGACY_USER,
        password: process.env.LEGACY_PASSWORD,
        database: process.env.LEGACY_DB_NAME,
        timezone: 'utc',
      },
    });

    const result = await connection(process.env.LEGACY_TABLE).timeout(3000, { cancel: true }).select('*').limit(3).debug(true);
    console.log("🚀 ~ file: test.ts:15 ~ result:", result);
  }

}
