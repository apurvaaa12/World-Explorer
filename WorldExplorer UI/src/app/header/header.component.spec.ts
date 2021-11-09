import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should test Div',() =>{
  //   let tool = fixture.debugElement.query(By.css('div'))
  //   expect(tool).toBeTruthy();
  // });

  // it('should test ul',() =>{
  //   let tool=fixture.debugElement.query(By.css('ul'))
  //   expect(tool).toBeTruthy();
  // });

  // it('should test Li',() =>{
  //   let tool=fixture.debugElement.query(By.css('li'))
  //   expect(tool).toBeTruthy();
  // });

  
});
