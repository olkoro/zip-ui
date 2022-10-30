import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloComponent} from "./hello/hello.component";
import {FileZipComponent} from "./file-zip/file-zip.component";
import {MessageComponent} from "./message/message.component";

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'file-zip', component: FileZipComponent},
  { path: 'messages', component: MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
