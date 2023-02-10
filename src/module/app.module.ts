import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistModule } from './playlist.module';
import { TrackModule } from './track.module';
import { AuthMiddleware } from 'src/security/auth.middleware';
import * as dotenv from 'dotenv';
import { Playlist } from 'src/entities/playlist.entity';
import { Track } from 'src/entities/track.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Track, Playlist],
      synchronize: true,
    }),
    TrackModule,
    PlaylistModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('tracks', 'playlists');
  }
}