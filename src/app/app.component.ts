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
     avatar:"https://picsum.photos/200/200"
   },
   {
    name:"fiora",
    dame:"800",
    defend:"400",
    speed:"500",
    price:"6300",
    avatar:'https://picsum.photos/200/200'
  },
  {
    name:"katarina",
    dame:"300",
    defend:"600",
    speed:"300",
    price:"6300",
    avatar:"https://picsum.photos/200/200"
  }
 ]
 studentName = "vietlqph1222"
 studentId = "hahaah"
 /// sự kiện
 // biến lưu trạng thái hiển thị bảng
 showStatus = true;
onClickBtn(){
  console.log("Đã click");
  this.showStatus = !this.showStatus
}
onInput(event : any , inPutName:string){
  console.log(inPutName,event.target.value);

}
///////////////////////////////////////////////ví dụ 2
inputValue = {
  name:'',
  avatar:'',
  speed:'',
  defend:'',
  dame:'',
  price:''
}
// inputName = '';
// onInputName(event:any){
//   this.inputValue.name = event.target.value
// }
// // inputAvatar = '';
// onInputAvatar(event:any){
//   this.inputValue.avatar=event.target.value
// }
onSubmit(){
  console.log("Giá trị obj các ô input" ,this.heros.push(this.inputValue),
  // name:this.inputName,
  // avatar:this.inputAvatar
  );
  this.inputValue={
    name:'',
    avatar:'',
    speed:'',
    defend:'',
    dame:'',
    price:''
  }
}
onInput1(event : any , key:'name'|'avatar'|'speed'|'dame'|'price'|'defend'){
 this.inputValue[key]= event.target.value;
}
}
