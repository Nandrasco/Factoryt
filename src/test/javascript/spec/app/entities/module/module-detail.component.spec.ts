/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { ModuleDetailComponent } from 'app/entities/module/module-detail.component';
import { Module } from 'app/shared/model/module.model';

describe('Component Tests', () => {
    describe('Module Management Detail Component', () => {
        let comp: ModuleDetailComponent;
        let fixture: ComponentFixture<ModuleDetailComponent>;
        const route = ({ data: of({ module: new Module(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplicationTestModule],
                declarations: [ModuleDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ModuleDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ModuleDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.module).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
