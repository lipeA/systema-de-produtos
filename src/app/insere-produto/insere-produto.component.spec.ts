import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsereProdutoComponent } from './insere-produto.component';

describe('InsereProdutoComponent', () => {
  let component: InsereProdutoComponent;
  let fixture: ComponentFixture<InsereProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsereProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsereProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
