import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { Playlist } from './playlist.entity';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  album: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  artist: string;

  @IsNotEmpty()
  @IsInt()
  @Column()
  duration: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  artwork: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  audio: string;

  @ManyToOne(type => Playlist, playlist => playlist.trackList)
  @JoinColumn({ name: 'playlist_id' })
  playlist: Playlist;
}