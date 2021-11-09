import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppPage } from 'e2e/src/app.po';
import { By } from '@angular/platform-browser';

import { BackgroundComponent } from './background.component';

describe('BackgroundComponent', () => {
  let component: BackgroundComponent;
  let fixture: ComponentFixture<BackgroundComponent>;
  let page:AppPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should test Div',() =>{
    let tool = fixture.debugElement.query(By.css('div'))
    expect(tool).toBeTruthy();
  });
  it('should test H1',() =>{
    let tool = fixture.debugElement.query(By.css('h1'))
    expect(tool).toBeTruthy();
  });

  it('should test H2',() =>{
    let tool = fixture.debugElement.query(By.css('h2'))
    expect(tool).toBeTruthy();
  });

  it('should test p',() =>{
    let tool = fixture.debugElement.query(By.css('p'))
    expect(tool).toBeTruthy();
  });

  it('should test H5',() =>{
    let tool = fixture.debugElement.query(By.css('h5'))
    expect(tool).toBeTruthy();
  });

  it('should test H3',() =>{
    let tool = fixture.debugElement.query(By.css('h3'))
    expect(tool).toBeTruthy();
  });

  it('should test app-footer',() =>{
    let tool=fixture.debugElement.query(By.css('app-footer'))
    expect(tool).toBeTruthy();
  });
  
});
