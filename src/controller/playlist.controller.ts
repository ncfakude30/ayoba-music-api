import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { Playlist } from 'src/resource/playlist.entity';
import { PlaylistsService } from 'src/service/playlist.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('playlists')
@UseGuards(AuthGuard('jwt'))
@UsePipes(new ValidationPipe({ transform: true }))
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  async create(@Body() playlist: Playlist) {
    return await this.playlistsService.create(playlist);
  }

  @Get()
  async findAll(): Promise<Playlist[]> {
    return await this.playlistsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Playlist> {
    return await this.playlistsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() playlist: Playlist) {
    await this.playlistsService.update(id, playlist);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.playlistsService.delete(id);
  }
}
