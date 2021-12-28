import { Transform } from "class-transformer";
import { Categorie } from "src/categorie/entities/categorie.entity";
import { TypeFilm } from "src/typefilm/entities/typefilm.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Film')
export class Film {

    @PrimaryGeneratedColumn()
    idFilm : number

    @Column({ unique: false })
    @ManyToOne(() => TypeFilm)
    @JoinColumn({name : 'idTypeFilm'})
    idTypeFilm : TypeFilm

    @Column()
    titre : string

    @Column()
    lienImage : string

    @Column()
    lienBandeAnnonce : string

    @Column()
    synopsis : string

    @Column()
    duree : number

    @Column('date') 
    dateSortie : Date

    @ManyToMany(type => Categorie, categorie => categorie.films)
    @JoinTable({
        name: "estDeCategorie",
        joinColumn: {
            name: "idFilm",
            referencedColumnName: "idFilm",
        },
        inverseJoinColumn: {
            name: "idCategorie",
            referencedColumnName: "idCategorie",
        },
    })
    categories: Categorie[]
}
