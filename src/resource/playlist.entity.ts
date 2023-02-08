import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

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

  @Column('trackList')
  trackList: string[];
}
