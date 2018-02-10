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
newServerName = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
  this.serverCreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
  });
  }

onAddBlueprint() {
this.blueprintCreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
})
}

}
