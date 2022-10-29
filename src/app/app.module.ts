import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {FileZipComponent} from './file-zip/file-zip.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { FileUploadComponent } from './file-zip/file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FileZipComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
