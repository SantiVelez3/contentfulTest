import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseDetailsComponent } from "./components/course-details/course-details.component";
import { CourseListComponent } from "./components/course-list/course-list.component";


const routes: Routes = [
    {path: '', redirectTo: '/courses', pathMatch:'full'},
    {path: 'courses', component:CourseListComponent, pathMatch:'full'},
    {path: 'course/:id', component:CourseDetailsComponent, pathMatch:'full'}
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class AppRoutingModule{}