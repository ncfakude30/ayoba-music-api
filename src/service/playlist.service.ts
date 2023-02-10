import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from 'src/resource/playlist.entity';
import { Track } from 'src/resource/track.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(Playlist)
    private readonly playlistRepository: Repository<Playlist>,
    @InjectRepository(Track)
    public readonly trackRepository: Repository<Track>
  ) {}

  async getPlaylists(): Promise<Playlist[]> {
    return await this.playlistRepository.find();
  }

  async getPlaylistById(id: string): Promise<Playlist> {

    return await this.playlistRepository.findOne({where: {id }});
  }

  async createPlaylist(playlist: Playlist): Promise<Playlist> {
    return await this.playlistRepository.save(playlist);
  }

  async updatePlaylist(id: string, playlist: Playlist): Promise<void> {
    await this.playlistRepository.update(id, playlist);
  }

  async deletePlaylist(id: string): Promise<void> {
    await this.playlistRepository.delete(id);
  }

  async addTrackToPlaylist(playlistId: string, trackId: string): Promise<void> {

    const playlist: Playlist = await this.playlistRepository.createQueryBuilder('playlist')
    .leftJoinAndSelect('playlist.trackList', 'track').where('playlist.id = :id', { id: playlistId })
    .getOne();

    if(await this.trackRepository.findOne({where: {id: trackId }})) {
        Logger.log(`Track with id: ${trackId} exists. Adding it to the playlist`);
        playlist.trackList.push(trackId);
        await this.playlistRepository.save(playlist);
    } else {
        Logger.warn(`Track with id: ${trackId} does not exist.`);
    }
  }
}