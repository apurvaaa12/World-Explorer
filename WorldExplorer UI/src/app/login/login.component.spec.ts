import { ComponentFixture, TestBed, fakeAsync, tick, async  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


import { LoginComponent } from './login.component';
import { from } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //  it('should create', () => {
  //    expect(component).toBeTruthy();
  //  });

  // it('should test div',() =>{
  //   let tool = fixture.debugElement.query(By.css('div'))
  //   expect(tool).toBeTruthy();
  // });

  
});
