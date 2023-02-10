import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { Track } from 'src/resource/track.entity';
import { TrackService } from 'src/service/track.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('tracks')
@UseGuards(AuthGuard('jwt'))
@UsePipes(new ValidationPipe({ transform: true }))
export class TrackController {
  constructor(private readonly tracksService: TrackService) {}


  @Post()
  async createTrack(@Body() track: Track) {
    return await this.tracksService.createTrack(track);
  }

  @Get()
  async getTracks(): Promise<Track[]> {
    return await this.tracksService.getTracks();
  }

  @Get(':id')
  async getTrackById(@Param('id') id: string): Promise<Track> {
    return await this.tracksService.getTrackById(id);
  }

  @Put(':id')
  async updateTrack(@Param('id') id: string, @Body() track: Track) {
    await this.tracksService.updateTrack(id, track);
  }

  @Delete(':id')
  async deleteTrack(@Param('id') id: string) {
    await this.tracksService.deleteTrack(id);
  }
}
