import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element-2.component.html',
  styleUrls: ['./input-element-2.component.css']
})
export class InputElementComponent {

  @Input() title!: string;
  @Input() name!: string;
  @Input() time = new Date();
  @Input() caption!: string;
  @Input() avtar!: string;
  @Input() image!: string;

  @Output() likeNotify = new EventEmitter<boolean>();
  @Output() shareNotify = new EventEmitter<boolean>();
  @Output() commentNotify = new EventEmitter<boolean>();

  likeEvent() {
    this.likeNotify.emit(true);
  }
  shareEvent() {
    this.shareNotify.emit(true);
  }
  commentEvent() {
    this.commentNotify.emit(true);
  }

  redirect() {
    window.open('http://localhost/seguros-en-linea/seguro-de-accidentes-personales-en-viaje', '_blank');
  }

}
