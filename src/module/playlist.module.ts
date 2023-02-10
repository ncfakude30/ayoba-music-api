import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistController } from 'src/controller/playlist.controller';
import { Playlist } from 'src/resource/playlist.entity';
import { Track } from 'src/resource/track.entity';
import { JwtStrategy } from 'src/security/jwt.strategy';
import { PlaylistService } from 'src/service/playlist.service';
import { TrackService } from 'src/service/track.service';


@Module({
    imports: [TypeOrmModule.forFeature([Track, Playlist])],
    controllers: [PlaylistController],
    providers: [PlaylistService, TrackService, JwtStrategy],
  })
  export class PlaylistModule {}