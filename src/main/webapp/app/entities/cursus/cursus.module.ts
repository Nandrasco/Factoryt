import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    CursusComponent,
    CursusDetailComponent,
    CursusUpdateComponent,
    CursusDeletePopupComponent,
    CursusDeleteDialogComponent,
    cursusRoute,
    cursusPopupRoute
} from './';

const ENTITY_STATES = [...cursusRoute, ...cursusPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [CursusComponent, CursusDetailComponent, CursusUpdateComponent, CursusDeleteDialogComponent, CursusDeletePopupComponent],
    entryComponents: [CursusComponent, CursusUpdateComponent, CursusDeleteDialogComponent, CursusDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationCursusModule {}
