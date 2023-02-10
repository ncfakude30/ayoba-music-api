import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Track } from 'src/entities/track.entity';
import { TrackService } from 'src/service/track.service';
import { Repository } from 'typeorm';

describe('TracksService', () => {
  let service: TrackService;
  let repository: Repository<Track>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrackService,
        {
          provide: getRepositoryToken(Track),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<TrackService>(TrackService);
    repository = module.get<Repository<Track>>(getRepositoryToken(Track));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTrack', () => {
    it('creates a track', async () => {
      const track = { id: '1', name: 'Track 1', album: 'Album 1', 
                    artist: 'artist', duration: 1, artwork: 'artwork', audio: 'audio', playlist: null
                };

      jest.spyOn(repository, 'save').mockImplementation(() => Promise.resolve(track));

      expect(await service.createTrack(track)).toEqual(track);
    });
  });

  describe('getTracks', () => {
    it('returns all tracks', async () => {
      const result = [
        { id: '1', name: 'Track 1', album: 'Album 1', 
                    artist: 'artist 1', duration: 1, artwork: 'artwork 1', audio: 'audio 1' , playlist: null
                },
        { id: '2', name: 'Track 2', album: 'Album 2', 
            artist: 'artist 2', duration: 2, artwork: 'artwork 2', audio: 'audio 2', playlist: null
        },
      ];

      jest.spyOn(repository, 'find').mockImplementation(() => Promise.resolve(result));

      expect(await service.getTracks()).toEqual(result);
    });
  });

  describe('getTrackById', () => {
    it('returns a track by id', async () => {
      const result =  { id: '1', name: 'Track 1', album: 'Album 1', 
      artist: 'artist 1', duration: 1, artwork: 'artwork 1', audio: 'audio 1' , playlist: null };

      jest.spyOn(repository, 'findOne').mockImplementation(() => Promise.resolve(result));

      expect(await service.getTrackById('1')).toEqual(result);
    });
  });

  describe('updateTrack', () => {
    it('updates a track', async () => {
      const track = { id: '1', name: 'Track 1', album: 'Album 1', artist: 'artist 1', duration: 1, artwork: 'artwork 1', audio: 'audio 1' , playlist: null };
      const result = { id: '2', name: 'Track 1', album: 'Album 2', artist: 'artist 2', duration: 2, artwork: 'artwork 2', audio: 'audio 2'  , playlist: null};

      jest.spyOn(repository, 'save').mockImplementation(() => Promise.resolve(result));

      expect(await service.updateTrack('1', track)).toEqual(result);
    });
  });
});

