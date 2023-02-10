import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { Playlist } from 'src/entities/playlist.entity';
import { PlaylistService } from 'src/service/playlist.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('playlists')
@UseGuards(AuthGuard('jwt'))
@UsePipes(new ValidationPipe({ transform: true }))
export class PlaylistController {
  constructor(private readonly playlistsService: PlaylistService) {}

  @Post()
  async createPlaylist(@Body() playlist: Playlist) {
    return await this.playlistsService.createPlaylist(playlist);
  }

  @Get()
  async getPlaylists(): Promise<Playlist[]> {
    return await this.playlistsService.getPlaylists();
  }

  @Get(':id')
  async getPlaylistById(@Param('id') id: string): Promise<Playlist> {
    return await this.playlistsService.getPlaylistById(id);
  }

  @Put(':id')
  async updatePlaylist(@Param('id') id: string, @Body() playlist: Playlist) {
    await this.playlistsService.updatePlaylist(id, playlist);
  }

  @Delete(':id')
  async deletePlaylist(@Param('id') id: string) {
    await this.playlistsService.deletePlaylist(id);
  }
}
