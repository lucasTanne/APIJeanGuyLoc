import { forwardRef, Module } from '@nestjs/common';
import { LocationstreamingService } from './locationstreaming.service';
import { LocationstreamingController } from './locationstreaming.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locationstreaming } from './entities/locationstreaming.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Film } from 'src/film/entities/film.entity';
import { FilmService } from 'src/film/film.service';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { FilmModule } from 'src/film/film.module';
import { NoteModule } from 'src/note/note.module';
import { CommentaireModule } from 'src/commentaire/commentaire.module';
import { ServiceNoteCommService } from 'src/service-note-comm/service-note-comm.service';
import { Note } from 'src/note/entities/note.entity';
import { Commentaire } from 'src/commentaire/entities/commentaire.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Locationstreaming, Utilisateur, Film, Note, Commentaire]), forwardRef(() => FilmModule), forwardRef(() => NoteModule), forwardRef(() => CommentaireModule)],
  controllers: [LocationstreamingController],
  providers: [LocationstreamingService, FilmService, UtilisateurService, ServiceNoteCommService]
})
export class LocationstreamingModule {}
