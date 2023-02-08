import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { Track } from 'src/resource/track.entity';
import { TracksService } from 'src/service/track.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('tracks')
@UseGuards(AuthGuard('jwt'))
@UsePipes(new ValidationPipe({ transform: true }))
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}


  @Post()
  async create(@Body() track: Track) {
    return await this.tracksService.create(track);
  }

  @Get()
  async findAll(): Promise<Track[]> {
    return await this.tracksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Track> {
    return await this.tracksService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() track: Track) {
    await this.tracksService.update(id, track);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.tracksService.delete(id);
  }
}
