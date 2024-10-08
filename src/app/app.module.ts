import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

import {CategoriesComponent} from './views/categories/categories.component';
import {TaskComponent} from './views/task/task.component';


@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        TaskComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
