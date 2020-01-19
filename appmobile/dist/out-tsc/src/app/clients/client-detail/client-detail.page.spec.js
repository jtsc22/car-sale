import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ClientDetailPage } from './client-detail.page';
describe('ClientDetailPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClientDetailPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ClientDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=client-detail.page.spec.js.map