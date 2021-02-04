import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.css']
})
export class Block2Component implements OnInit {
  param1:number = 10; 
  param2:boolean = true;
  param3:string = 'hello';
  param4:null = null;
  param5:undefined = undefined;

  @Input()
  inputParam6: string = '';

  @Output()
  userChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setValue(e: any): void {
    this.param3 = e.target?.value || e.value;
    this.userChange.emit(this.param3);
}

}
