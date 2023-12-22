# Nest.js mikro-orm seeder issue 

**Prerequisites**

- create .env in apps/test-app by cloninng .env.example and set envs



### .env

put this in .env or use envs you want

```
MIKRO_ORM_DB_NAME=test_db
MIKRO_ORM_HOST=127.0.0.1
MIKRO_ORM_PORT=5432
MIKRO_ORM_USER=postgres
MIKRO_ORM_PASSWORD=postgres

# legacy
LEGACY_DB_NAME=test_db
LEGACY_HOST=127.0.0.1
LEGACY_USER=root
LEGACY_PASSWORD=password
LEGACY_TABLE=test_table
```



### Run docker compose

I prepared init sql so all required database and tables will will created 

```
docker compose up
```



### Run Migrations

```
 pnpm nx mikro-orm data-svc --args='migration:up'
```



### how to run app

```
pnpm nx run test-app:serve
```

you will see knex result logs when app starts. so this isn't db connection issue. 



### run User Seeder and MigrationSeeder

```
pnpm nx mikro-orm test-app --args='seeder:run --class UserSeeder'
pnpm nx mikro-orm test-app --args='seeder:run --class MigrationSeeder'
```



when you run `pnpm nx mikro-orm test-app --args='seeder:run --class MigrationSeeder'`  it will be hung.







