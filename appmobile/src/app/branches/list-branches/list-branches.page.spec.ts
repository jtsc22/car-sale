import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListBranchesPage } from './list-branches.page';

describe('ListBranchesPage', () => {
  let component: ListBranchesPage;
  let fixture: ComponentFixture<ListBranchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBranchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListBranchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
