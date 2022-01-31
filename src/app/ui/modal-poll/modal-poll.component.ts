import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-modal-poll',
  templateUrl: './modal-poll.component.html',
  styleUrls: ['./modal-poll.component.css']
})
export class ModalPollComponent implements OnInit {

  @Output() setTeam:EventEmitter<string> = new EventEmitter<string>();
  @Input() public title_modal : string;

  public show_modal: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  send_team(team: string): void {
    this.setTeam.emit(team);
    this.toggle_modal();
  }

  toggle_modal(): void {
    this.show_modal = !this.show_modal;
  }

}
