import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  // // it('should test Div',() =>{
  // //   let tool=fixture.debugElement.query(By.css('div'))
  // //   expect(tool).toBeTruthy();
  // });

  // it('should test Label',() =>{
  //   let tool=fixture.debugElement.query(By.css('label'))
  //   expect(tool).toBeTruthy();
  // });
  // it('should test H1',() =>{
  //   let tool=fixture.debugElement.query(By.css('h1'))
  //   expect(tool).toBeTruthy();
  // });


});
