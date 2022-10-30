import { Component, OnInit } from '@angular/core';
import {HelloService} from "../service/hello.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name: string = '';
  text: string = '';

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
  }

  greet() {
    this.helloService.getText(this.name).subscribe(res => this.text = res);
  }
}
