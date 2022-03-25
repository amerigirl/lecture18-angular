import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-labeled-input',
  templateUrl: './labeled-input.component.html',
  styleUrls: ['./labeled-input.component.css']
})

export class LabeledInputComponent implements OnInit {
  myTagName: string = '';
  constructor(elem: ElementRef) {
    this.myTagName = elem.nativeElement.getAttribute('data-label')
  }

  ngOnInit() {
  }

}
