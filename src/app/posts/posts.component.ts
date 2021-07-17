import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  description: string = ""
  constructor( private serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  addDescription(formValue: NgForm) {
    console.log(formValue.value);
    
    const postBody = {
      description: formValue.value.description,
      
    };

    console.log(postBody)
    this.serviceService.AddPost(postBody).subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log("Unable to add user" + err);
    })
    // formValue.resetForm();
    window.location.reload();

  }
}
