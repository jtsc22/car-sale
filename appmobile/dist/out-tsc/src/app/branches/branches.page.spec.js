import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BranchesPage } from './branches.page';
describe('BranchesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BranchesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BranchesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=branches.page.spec.js.map