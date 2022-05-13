import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = "vietlq";
  class="we99999";
//   students = [
//     {
//       name:"viethaha",
//       id:"12",
//       status:0
//   },
//   {
//     name:"viethaha113",
//     id:"14",
//     status:1
// },
// {
//   name:"viethaha111",
//   id:"15",
//   status:1
// }
// ]
 heros = [
   {
     name:"yasuo",
     dame:"1000",
     defend:"200",
     speed:"400",
     price:"6300",
     avatar:"https://picsum.photos/200/300"
   },
   {
    name:"fiora",
    dame:"800",
    defend:"400",
    speed:"500",
    price:"6300",
    avatar:'https://picsum.photos/200/300'
  },
  {
    name:"katarina",
    dame:"700",
    defend:"600",
    speed:"300",
    price:"6300",
    avatar:"https://picsum.photos/200/300"
  }
 ]
 studentName = "vietlqph1222"
 studentId = "hahaah"
}
