import { Test, TestingModule } from '@nestjs/testing';
import { Track } from 'src/entity/track.entity';
import { PlaylistService } from 'src/service/playlist.service';
import { NotFoundException } from '@nestjs/common';
import { Playlist } from 'src/entity/playlist.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TrackService } from 'src/service/track.service';

describe('PlaylistService', () => {
  let playlistService: PlaylistService;
  let playlistRepository;
  let trackRepository;
  let trackService;

  beforeEach(async () => {
    
    const module: TestingModule = await Test.createTestingModule({
        providers: [
            PlaylistService,
            TrackService,
          {
            provide: getRepositoryToken(Playlist),
            useClass: Repository,
          },
          {
            provide: getRepositoryToken(Track),
            useClass: Repository,
          }
        ],
      }).compile();

    trackService = module.get<TrackService>(TrackService);
    playlistService = module.get<PlaylistService>(PlaylistService);
    trackRepository = module.get<Repository<Track>>(getRepositoryToken(Track));
    playlistRepository = module.get<Repository<Playlist>>(getRepositoryToken(Playlist));
  });

  describe('getAllPlaylists', () => {
    it('should return an array of playlists', async () => {
      playlistRepository.find.mockResolvedValue('playlists');

      expect(playlistRepository.find).not.toHaveBeenCalled();
      const result = await playlistService.getPlaylists();
      expect(playlistRepository.find).toHaveBeenCalled();
      expect(result).toEqual('playlists');
    });
  });

  describe('getPlaylistById', () => {
    it('should return a playlist by id', async () => {
      const mockPlaylist = { id: 1, name: 'Test Playlist' };
      playlistRepository.findOne.mockResolvedValue(mockPlaylist);

      expect(playlistRepository.findOne).not.toHaveBeenCalled();
      const result = await playlistService.getPlaylistById('1');
      expect(playlistRepository.findOne).toHaveBeenCalled();
      expect(result).toEqual(mockPlaylist);
    });

    it('should throw an error if playlist is not found', async () => {
      playlistRepository.findOne.mockResolvedValue(null);

      expect(playlistService.getPlaylistById('1')).rejects.toThrow(NotFoundException);
    });
  });
});