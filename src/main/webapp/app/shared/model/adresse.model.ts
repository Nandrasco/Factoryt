import { IStagiaire } from 'app/shared/model//stagiaire.model';
import { IFormateur } from 'app/shared/model//formateur.model';
import { ITechnicien } from 'app/shared/model//technicien.model';
import { IGestionnaire } from 'app/shared/model//gestionnaire.model';

export interface IAdresse {
    id?: number;
    numero?: number;
    rue?: string;
    codePostal?: string;
    ville?: string;
    stagiaire?: IStagiaire;
    formateur?: IFormateur;
    technicien?: ITechnicien;
    gestionnaire?: IGestionnaire;
}

export class Adresse implements IAdresse {
    constructor(
        public id?: number,
        public numero?: number,
        public rue?: string,
        public codePostal?: string,
        public ville?: string,
        public stagiaire?: IStagiaire,
        public formateur?: IFormateur,
        public technicien?: ITechnicien,
        public gestionnaire?: IGestionnaire
    ) {}
}
