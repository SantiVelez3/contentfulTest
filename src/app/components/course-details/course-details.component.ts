import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private contentfulService:ContentfulService, private router:Router, private aRoute: ActivatedRoute ) { }

  course!: Entry<any>;
  courseId = this.aRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {

    this.contentfulService.getCourse(this.courseId).then( (course) =>{
      console.log(course);
      this.course = course;
      
    })

  }

}
