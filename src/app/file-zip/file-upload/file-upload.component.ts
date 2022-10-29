import {Component, EventEmitter, forwardRef, OnInit, Output} from '@angular/core';
import {FileService} from "../../file.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Output() fileChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }


  onFileChange(event: Event) {
    if (!event || !event.target) {
      return;
    }
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!files || !files.length) {
      return;
    }
    this.fileService.uploadFile(files[0]).subscribe(res => {
      this.fileChange.emit(files[0].name);
    }, err => {
      throw err;
    });
  }
}
