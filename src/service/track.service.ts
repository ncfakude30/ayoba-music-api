import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from 'src/entities/track.entity';
import { Repository , FindOneOptions} from 'typeorm';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    public readonly trackRepository: Repository<Track>,
  ) {}

  async getTracks(): Promise<Track[]> {
    return await this.trackRepository.find();
  }

  async getTrackById(id: string): Promise<Track> {
    const options: FindOneOptions<Track> = {
      where: { id }
    };
    return await this.trackRepository.findOne(options);
  }

  async createTrack(track: Track): Promise<Track> {
    return await this.trackRepository.save(track);
  }

  async updateTrack(id: string, track: Track): Promise<void> {
    await this.trackRepository.update(id, track);
  }

  async deleteTrack(id: string): Promise<void> {
    await this.trackRepository.delete(id);
  }
}