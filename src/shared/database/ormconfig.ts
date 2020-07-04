import {ConnectionOptions} from 'typeorm';

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...
const env = process.env

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
  type: 'mysql',
  host: env.DATABASE_HOST,
  port: +env.DATABASE_HOST,
  username: env.DATABASE_HOST,
  password: env.DATABASE_HOST,
  database: env.DATABASE_HOST,
  entities: [__dirname + '../../../**/*.entity{.ts,.js}'],
  
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  // logging: true,
  // logger: 'file',
  
  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migration',
    entitiesDir: 'src/database/entity',
    subscribersDir: 'src/database/subscriber',
  },
};

export = config;