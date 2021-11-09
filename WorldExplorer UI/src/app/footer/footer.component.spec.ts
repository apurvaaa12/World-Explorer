import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should test Div',() =>{
    let tool=fixture.debugElement.query(By.css('div'))
    expect(tool).toBeTruthy();
  });

    // it('should test a',() =>{
    //   let tool=fixture.debugElement.query(By.css('a'))
    //   expect(tool).toBeTruthy();
    // });
  
    it('should test H4',() =>{
      let tool=fixture.debugElement.query(By.css('h4'))
      expect(tool).toBeTruthy();
    });

    
});
