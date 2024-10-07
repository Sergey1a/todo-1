import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    tasks: Task[];

    constructor(private dataHandler: DataHandlerService) {
    }

    ngOnInit() {
        this.dataHandler.tasksSubject.subscribe(task => this.tasks = task);
    }

}
