import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CategoresModule } from './categores/categores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs_dev',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/database/migrations/*.{js,ts}'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    UsersModule,
    CategoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
