import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
    selector: 'app-task',
    templateUrl: './tasks.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit,AfterViewInit {

    public displayedColumns:string[] = ['color','id','title','date','priority','category',];
    public dataSource:MatTableDataSource<Task>;

    @ViewChild(MatSort, {static: false}) private sort: MatSort;
    @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;

    tasks: Task[];

    constructor(private dataHandler: DataHandlerService) {
    }

    ngOnInit() {
        this.dataHandler.tasksSubject.subscribe(task => this.tasks = task);
        this.dataSource = new MatTableDataSource();

        this.refreshTable();
    }

    ngAfterViewInit() {
        this.addTableObjects();
    }

    toggleTaskCompleted(task: Task) {
        task.completed = !task.completed;
    }

    public getPriorityColor(task: Task) {

        if(task.completed) {
            return '#F8F9FA'
        }

        if(task.priority && task.priority.color) {
            return task.priority.color;
        }

        return "#fff";
    }

    refreshTable() {
        this.dataSource.data = this.tasks;

        this.addTableObjects();

        // @ts-ignore
        this.dataSource.sortingDataAccessor = (task, colName) => {
            switch(colName) {
                case 'priority': {
                    return task.priority ? task.priority.id : null;
                }
                case 'category': {
                    return task.category ? task.category.title : null;
                }
                case 'date': {
                    return task.date ? task.date : null;
                }
                case 'title': {
                    return task.title;
                }
            }
        };
    }

    private addTableObjects() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
}
