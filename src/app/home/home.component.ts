import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getPost().subscribe(data => {
      this.posts = data;
    });
    // this.serviceService.updatePost()
  }

  deletePost(id:number){
    this.serviceService.deletePost(id).subscribe(data => {
      console.log("User deleted successfully" + data);
    }, (err) => {
      console.log("Unable to delete the post" + err);
    })
    window.location.reload();
  }
  

  updatePost(id:number){
    
    this.serviceService.updatePost(id).subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log(err);
    })
  }
}
