import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistsController } from 'src/controller/playlist.controller';
import { Playlist } from 'src/resource/playlist.entity';
import { Track } from 'src/resource/track.entity';
import { JwtStrategy } from 'src/security/jwt.strategy';
import { PlaylistsService } from 'src/service/playlist.service';
import { TracksService } from 'src/service/track.service';


@Module({
    imports: [TypeOrmModule.forFeature([Track, Playlist])],
    controllers: [PlaylistsController],
    providers: [PlaylistsService, TracksService, JwtStrategy],
  })
  export class PlaylistsModule {}