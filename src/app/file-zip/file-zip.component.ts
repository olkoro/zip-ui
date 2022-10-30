import { Component, OnInit } from '@angular/core';
import {FileService} from "../service/file.service";
import {saveAs} from "file-saver";

@Component({
  selector: 'app-file-zip',
  templateUrl: './file-zip.component.html',
  styleUrls: ['./file-zip.component.css']
})
export class FileZipComponent implements OnInit {

  files: string[] = []
  showUpload = true;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  private getFiles() {
    this.fileService.getFiles().subscribe(res => {
      this.files = res;
      this.showUpload = true;
    });
  }

  download(file: string) {
    this.fileService.downloadFile(file).subscribe(res => {
      if (res.body){
        saveAs(res.body, file);
      }
  });
  }

  downloadAll() {
    this.fileService.downloadAll().subscribe(res => {
      console.log('download all')
      if (res.body) {
        saveAs(res.body, 'all.zip');
      }
    })
  }

  onUpload(file: string) {
    this.showUpload = false;
    this.getFiles();
  }
}

