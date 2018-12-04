/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { AdresseDetailComponent } from 'app/entities/adresse/adresse-detail.component';
import { Adresse } from 'app/shared/model/adresse.model';

describe('Component Tests', () => {
    describe('Adresse Management Detail Component', () => {
        let comp: AdresseDetailComponent;
        let fixture: ComponentFixture<AdresseDetailComponent>;
        const route = ({ data: of({ adresse: new Adresse(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [AdresseDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(AdresseDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AdresseDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.adresse).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
