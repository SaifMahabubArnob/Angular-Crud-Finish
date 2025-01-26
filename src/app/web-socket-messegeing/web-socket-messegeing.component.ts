import { Component } from '@angular/core';
import { Tasks } from '../model/task';
import { WebsocketService } from '../web-socket-messegeing.service';

@Component({
  selector: 'app-web-socket-messegeing',
  templateUrl: './web-socket-messegeing.component.html',
  styleUrls: ['./web-socket-messegeing.component.css']
})
export class WebSocketMessegeingComponent {

  tasks: Tasks[] = [];
  newTaskName: string = '';
  newTaskDays: number = 0;

  constructor(private websocketService: WebsocketService) {}


  ngOnInit(): void {
    // Listen for incoming tasks
    this.websocketService.listen((receivedTasks: any) => {
      console.log(this.tasks.length,'-----------------------------');
      
      this.tasks = receivedTasks;
    });
  }

  sendTask(): void {
    if (this.newTaskName && this.newTaskDays) {
      const newTask: Tasks = {
        id:null,
        name: this.newTaskName,
        days: this.newTaskDays
      };
      console.log(newTask,'--------------------------------------');
      

      this.websocketService.send(newTask);

      // Reset input fields
      this.newTaskName = '';
      this.newTaskDays = 0;
    }
  }
}
