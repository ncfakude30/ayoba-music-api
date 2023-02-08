import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TracksController } from 'src/controller/track.controller';
import { Track } from 'src/resource/track.entity';
import { JwtStrategy } from 'src/security/jwt.strategy';
import { TracksService } from 'src/service/track.service';

@Module({
  imports: [TypeOrmModule.forFeature([Track])],
  controllers: [TracksController],
  providers: [TracksService, JwtStrategy],
})
export class TracksModule {}