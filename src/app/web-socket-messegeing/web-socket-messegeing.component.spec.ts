import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketMessegeingComponent } from './web-socket-messegeing.component';

describe('WebSocketMessegeingComponent', () => {
  let component: WebSocketMessegeingComponent;
  let fixture: ComponentFixture<WebSocketMessegeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSocketMessegeingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSocketMessegeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
