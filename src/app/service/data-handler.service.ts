import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from '../model/Task';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataHandlerService {

    tasksSubject: Subject<Task[]> = new Subject<Task[]>();

    constructor() {
    }

    getCategories(): Category[] {
        return TestData.categories
    }

    getTasks():void {
        this.tasksSubject.next(TestData.tasks);
    }

    getTaskByCategory(category: Category):void {
        const task = TestData.tasks.filter((task: Task) => task.category === category);
        this.tasksSubject.next(task);
    }
}
