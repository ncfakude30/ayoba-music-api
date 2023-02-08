import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

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
}