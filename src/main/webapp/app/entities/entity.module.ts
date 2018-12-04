import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationFormateurModule } from './formateur/formateur.module';
import { JhipsterSampleApplicationStagiaireModule } from './stagiaire/stagiaire.module';
import { JhipsterSampleApplicationAdresseModule } from './adresse/adresse.module';
import { JhipsterSampleApplicationTechnicienModule } from './technicien/technicien.module';
import { JhipsterSampleApplicationGestionnaireModule } from './gestionnaire/gestionnaire.module';
import { JhipsterSampleApplicationModuleModule } from './module/module.module';
import { JhipsterSampleApplicationCursusModule } from './cursus/cursus.module';
import { JhipsterSampleApplicationMatiereModule } from './matiere/matiere.module';
import { JhipsterSampleApplicationOrdinateurModule } from './ordinateur/ordinateur.module';
import { JhipsterSampleApplicationProjecteurModule } from './projecteur/projecteur.module';
import { JhipsterSampleApplicationSalleModule } from './salle/salle.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleApplicationFormateurModule,
        JhipsterSampleApplicationStagiaireModule,
        JhipsterSampleApplicationAdresseModule,
        JhipsterSampleApplicationTechnicienModule,
        JhipsterSampleApplicationGestionnaireModule,
        JhipsterSampleApplicationModuleModule,
        JhipsterSampleApplicationCursusModule,
        JhipsterSampleApplicationMatiereModule,
        JhipsterSampleApplicationOrdinateurModule,
        JhipsterSampleApplicationProjecteurModule,
        JhipsterSampleApplicationSalleModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
