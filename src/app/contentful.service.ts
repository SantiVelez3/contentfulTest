import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId ,
    accessToken: environment.contentful.token 
  });
  constructor() { }

  getCourses(query?:object):Promise<Entry<any>[]>{

    return this.client.getEntries(Object.assign({
      content_type: 'exampleApplication'
    },
    query)).then( res => res.items);

  }

  getCourse(courseId: any):Promise<Entry<any>>{

    return this.client.getEntries(Object.assign({
      content_type: 'exampleApplication'
    }, {'sys.id':courseId})).then(res => res.items[0]);
    
  }
}
