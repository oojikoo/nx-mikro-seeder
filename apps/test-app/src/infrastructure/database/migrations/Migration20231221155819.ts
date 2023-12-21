import { Migration } from '@mikro-orm/migrations';

export class Migration20231221155819 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" uuid not null default gen_random_uuid(), "name" varchar(255) null, "email" varchar(255) not null, "identity_id" uuid null, constraint "user_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
