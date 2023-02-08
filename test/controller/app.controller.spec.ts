
import { Test, TestingModule } from '@nestjs/testing';
import { PlaylistsController } from '../../src/controller/playlist.controller';
import { TracksController } from '../../src/controller/track.controller';
import { TracksService } from '../../src/service/track.service';
import { PlaylistsService } from '../../src/service/playlist.service';

describe('PlaylistsController', () => {
  let playlistsController: PlaylistsController;
  let tracksController: TracksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TracksController, PlaylistsController],
      providers: [TracksService, PlaylistsService],
    }).compile();

    playlistsController = app.get<PlaylistsController>(PlaylistsController);
    tracksController = app.get<TracksController>(TracksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(playlistsController.findOne("test")).toBeNull;
    });
  });
});

