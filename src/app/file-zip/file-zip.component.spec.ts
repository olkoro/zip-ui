import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileZipComponent } from './file-zip.component';

describe('FileZipComponent', () => {
  let component: FileZipComponent;
  let fixture: ComponentFixture<FileZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileZipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
