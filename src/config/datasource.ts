import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nestjs_dev',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*.{js,ts}'],
  synchronize: false,
});
