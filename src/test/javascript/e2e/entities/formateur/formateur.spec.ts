/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { FormateurComponentsPage, FormateurDeleteDialog, FormateurUpdatePage } from './formateur.page-object';

const expect = chai.expect;

describe('Formateur e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let formateurUpdatePage: FormateurUpdatePage;
    let formateurComponentsPage: FormateurComponentsPage;
    let formateurDeleteDialog: FormateurDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Formateurs', async () => {
        await navBarPage.goToEntity('formateur');
        formateurComponentsPage = new FormateurComponentsPage();
        expect(await formateurComponentsPage.getTitle()).to.eq('jhipsterSampleApplicationApp.formateur.home.title');
    });

    it('should load create Formateur page', async () => {
        await formateurComponentsPage.clickOnCreateButton();
        formateurUpdatePage = new FormateurUpdatePage();
        expect(await formateurUpdatePage.getPageTitle()).to.eq('jhipsterSampleApplicationApp.formateur.home.createOrEditLabel');
        await formateurUpdatePage.cancel();
    });

    it('should create and save Formateurs', async () => {
        const nbButtonsBeforeCreate = await formateurComponentsPage.countDeleteButtons();

        await formateurComponentsPage.clickOnCreateButton();
        await promise.all([
            formateurUpdatePage.setNomInput('nom'),
            formateurUpdatePage.setPrenomInput('prenom'),
            formateurUpdatePage.setCoordonneesInput('coordonnees'),
            formateurUpdatePage.niveauSelectLastOption()
        ]);
        expect(await formateurUpdatePage.getNomInput()).to.eq('nom');
        expect(await formateurUpdatePage.getPrenomInput()).to.eq('prenom');
        expect(await formateurUpdatePage.getCoordonneesInput()).to.eq('coordonnees');
        await formateurUpdatePage.save();
        expect(await formateurUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await formateurComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Formateur', async () => {
        const nbButtonsBeforeDelete = await formateurComponentsPage.countDeleteButtons();
        await formateurComponentsPage.clickOnLastDeleteButton();

        formateurDeleteDialog = new FormateurDeleteDialog();
        expect(await formateurDeleteDialog.getDialogTitle()).to.eq('jhipsterSampleApplicationApp.formateur.delete.question');
        await formateurDeleteDialog.clickOnConfirmButton();

        expect(await formateurComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
