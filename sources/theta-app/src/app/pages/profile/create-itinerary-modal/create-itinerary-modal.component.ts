import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-itinerary-modal',
  templateUrl: 'create-itinerary-modal.component.html',
})
export class CreateItineraryModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Output() continue = new EventEmitter();
  @Input() modalRef: ElementRef;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  onClose() {
    this.closeModal.emit();
    this.modalController.dismiss();
  }

  onContinue() {
    console.log('test hello');
    this.modalRef?.nativeElement.setCurrentBreakpoint(0.9);
  }
}
