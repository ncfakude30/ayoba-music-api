import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { Track } from './track.entity';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  creator: string;

  @IsNotEmpty()
  @IsInt()
  @Column()
  playtime: number;

  @OneToMany(type => Track, track => track.playlist)
  trackList: Track[];
}
