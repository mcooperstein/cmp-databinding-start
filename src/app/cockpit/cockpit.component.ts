import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

@Output() serverCreated = new EventEmitter<{serverName: string, serverContet: string}>();
@Output() blueprintCreated= new EventEmitter<{serverName: string, serverContet: string}>();

newServerContent = '';
//newServerName = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput) {
  console.log(nameInput.value);
  this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent: this.newServerContent
  });
  }

onAddBlueprint(nameInput) {
this.blueprintCreated.emit({
    serverName: nameInput.value,
    serverContent: this.newServerContent
})
}

}
