import { Options, ReflectMetadataProvider } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const config: Options = {
  type: 'postgresql',
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  dbName: 'test_db',
  entities: ['dist/**/**/**/*.entity.js'],
  entitiesTs: ['src/**/**/**/*.entity.ts'],
  migrations: {
    path: 'src/infrastructure/database/migrations',
  },
  seeder: {
    path: 'src/infrastructure/database/seeders',
  },
  debug: true,
  highlighter: new SqlHighlighter(),
  baseDir: __dirname,
  metadataProvider: ReflectMetadataProvider,
  pool: {
    min: 1,
    max: 5,
  },
};

export default config;
