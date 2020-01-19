import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ClientListPage } from './client-list.page';
describe('Tab1Page', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClientListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ClientListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=client-list.page.spec.js.map