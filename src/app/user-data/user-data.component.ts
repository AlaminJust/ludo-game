import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})

export class UserDataComponent implements OnInit {

  userImage:any;

  constructor(private user:UserServiceService){}

  ngOnInit(): void {
    const imageUrl: string= `https://img.freepik.com/free-photo/side-view-woman-wearing-helmet_23-2149727788.jpg`;
    this.loadImage(imageUrl);
  }

  loadImage(imageUrl:string)
  {
    this.user.getUserImage(imageUrl).subscribe((imagedata:Blob) => {
      this.createImageFromBlob(imagedata);
    },
    (error) => {
      console.error('Error fetching user image:', error);
    } )
  }

  createImageFromBlob(image: Blob): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.userImage = reader.result;
    };
    reader.readAsDataURL(image);
  }
}
