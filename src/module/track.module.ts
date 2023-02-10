import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackController } from 'src/controller/track.controller';
import { Track } from 'src/entities/track.entity';
import { JwtStrategy } from 'src/security/jwt.strategy';
import { TrackService } from 'src/service/track.service';

@Module({
  imports: [TypeOrmModule.forFeature([Track])],
  controllers: [TrackController],
  providers: [TrackService, JwtStrategy],
})
export class TrackModule {}