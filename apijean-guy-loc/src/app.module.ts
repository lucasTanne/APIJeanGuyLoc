import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ActeurModule } from './acteur/acteur.module';
import { RealisateurModule } from './realisateur/realisateur.module';
import { NoteModule } from './note/note.module';
import { FilmModule } from './film/film.module';
import { TypefilmModule } from './typefilm/typefilm.module';
import { CategorieModule } from './categorie/categorie.module';
import { CommentaireModule } from './commentaire/commentaire.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config), UtilisateurModule, ActeurModule, RealisateurModule, NoteModule, FilmModule, TypefilmModule, CategorieModule, CommentaireModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

