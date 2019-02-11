import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubBattleComponent } from './github-battle.component';

describe('GithubBattleComponent', () => {
  let component: GithubBattleComponent;
  let fixture: ComponentFixture<GithubBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
