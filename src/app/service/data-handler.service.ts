import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from '../model/Task';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataHandlerService {

    tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(TestData.tasks);
    categoriesSubject: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(TestData.categories);

    constructor() {
        this.getTasks();
    }

    // getCategories(): Category[] {
    //     return TestData.categories
    // }

    getTasks():void {
        this.tasksSubject.next(TestData.tasks);
    }

    getTaskByCategory(category: Category):void {
        const task = TestData.tasks.filter((task: Task) => task.category === category);
        this.tasksSubject.next(task);
    }
}
