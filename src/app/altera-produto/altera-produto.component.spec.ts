import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraProdutoComponent } from './altera-produto.component';

describe('AlteraProdutoComponent', () => {
  let component: AlteraProdutoComponent;
  let fixture: ComponentFixture<AlteraProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteraProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
