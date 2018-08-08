import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagefriendComponent } from './messagefriend.component';

describe('MessagefriendComponent', () => {
  let component: MessagefriendComponent;
  let fixture: ComponentFixture<MessagefriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagefriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagefriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
