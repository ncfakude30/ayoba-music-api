import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from 'src/resource/track.entity';
import { Repository , FindOneOptions} from 'typeorm';

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track)
    public readonly trackRepository: Repository<Track>,
  ) {}

  async findAll(): Promise<Track[]> {
    return await this.trackRepository.find();
  }

  async findOne(id: string): Promise<Track> {
    const options: FindOneOptions<Track> = {
      where: { id }
    };
    return await this.trackRepository.findOne(options);
  }

  async create(track: Track): Promise<Track> {
    return await this.trackRepository.save(track);
  }

  async update(id: string, track: Track): Promise<void> {
    await this.trackRepository.update(id, track);
  }

  async delete(id: string): Promise<void> {
    await this.trackRepository.delete(id);
  }
}