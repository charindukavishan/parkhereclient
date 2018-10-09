import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messageClass;
  message;
  newPost ;
  loadingBlogs = false;
  form;
  commentForm;
  processing = false;
  username;
  blogPosts;
  newComment = [];
  enabledComments = [];
  model ={
    createdBy :'',
    title:'',
    body:''
  };
  constructor(private service:RegserviceService) { }

  ngOnInit() {
    this.getAllBlogs();
  }

  newcomment(){
    this.newPost=true;
  }

  goback(){
    this.newPost=false
  }
  disableFormNewBlogForm() {
    this.model.createdBy='', // Disable title field
    this.model.title='' // Disable body field
    this.model.body=''
  }
  onSubmit(form : NgForm) {console.log(form.value)
    this.processing = true; // Disable submit button
    this.disableFormNewBlogForm(); // Lock form

    // Create blog object from form fields
    const blog = {
      title: this.model.title, // Title field
      body: this.model.body, // Body field
      createdBy: this.model.createdBy // CreatedBy field
    }

    // Function to save blog into database
    this.service.newpost(form.value).subscribe(data => {
      // Check if blog was saved to database or not
      if (!data) {
        this.messageClass = 'alert alert-danger'; // Return error class
       // this.message = data.message; // Return error message
        this.processing = false; // Enable submit button
       // this.enableFormNewBlogForm(); // Enable form
      } else {this.newPost=false;
        this.messageClass = 'alert alert-success'; // Return success class
       console.log(data);
        this.message = data['message']; // Return success message
        this.getAllBlogs();
        // Clear form data after two seconds
        // setTimeout(() => {
        //   this.newPost = false; // Hide form
        //   this.processing = false; // Enable submit button
        //   //this.message = false; // Erase error/success message
        //   //this.form.reset(); // Reset all form fields
        //   //this.enableFormNewBlogForm(); // Enable the form fields
        // }, 2000);
      }
    });
  //location.reload();
  }

  // Function to get all blogs from the database
  getAllBlogs() {
    // Function to GET all blogs from database
    this.service.getAllPosts().subscribe(data => {
      this.blogPosts = data['blogs']; // Assign array to use in HTML
    console.log(data);
    });
  }
}
