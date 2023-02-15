import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items:Array<any>=[
    {
      id:1,
      name:"mặt hàng 1",
      ShopName:"Cặp xinh",
      Image: "../assets/bag1.jpg",
      price:"30.000đ",
      decription:"cặp táp",
      OutOfStock:true,
      NumberOfOrder:"1000",

    },

    {
      id:2,
      name: "mặt hàng 2",
      ShopName:"Cặp xinh",
      Image: "../assets/bag2.jpg",
      price: "20.000đ",
      decription: "cặp táp",
      OutOfStock: false,
      NumberOfOrder: "14000",

    },

    {
      id:3,
      name: "mặt hàng 3",
      ShopName:"Cặp xinh",
      Image: "../assets/bag3.jpg",
      price: "40.000đ",
      decription: "cặp táp",
      OutOfStock: true,
      NumberOfOrder: "2000",

    },

    {
      id:4,
      name:"mặt hàng 4",
      ShopName:"Cặp xinh",
      Image: "../assets/bag4.jpg",
      price:"80.000đ",
      decription:"cặp táp",
      OutOfStock:true,
      NumberOfOrder:"1000",

    },

    {
      id:5,
      name:"mặt hàng 5",
      ShopName:"Cặp xinh",
      Image: "../assets/bag5.jpg",
      price:"50.000đ",
      decription:"cặp táp",
      OutOfStock:true,
      NumberOfOrder:"1000",

    },

    {
      id:6,
      name:"mặt hàng 6",
      ShopName:"Cặp xinh",
      Image: "../assets/bag6.jpg",
      price:"30.000đ",
      decription:"cặp táp",
      OutOfStock:true,
      NumberOfOrder:"1000",

    },

    {
      id:7,
      name:"mặt hàng 7",
      ShopName:"Cặp xinh",
      Image: "../assets/bag7.jpg",
      price:"30.000đ",
      decription:"cặp táp",
      OutOfStock:true,
      NumberOfOrder:"1000",

    },

    {
      id: 8,
      name:"mặt hàng 8",
      ShopName:"Cặp xinh",
      Image: "../assets/bag8.jpg",
      price:"90.000đ",
      decription:"cặp táp",
      OutOfStock:false,
      NumberOfOrder:"1000",

    },

    {
      id:9,
      name:"mặt hàng 9",
      ShopName:"Cặp xinh",
      Image: "../assets/bag9.jpg",
      price:"30.000đ",
      decription:"cặp táp",
      OutOfStock:true,
      NumberOfOrder:"1000",

    },

    {
      id:10,
      name:"mặt hàng 10",
      ShopName:"Cặp xinh",
      Image: "../assets/bag10.jpg",
      price:"30.000đ",
      decription:"cặp táp",
      OutOfStock:true,
      NumberOfOrder:"1000",

    },

    {
      id:11,
      name:"mặt hàng 11",
      ShopName:"Cặp xinh",
      Image: "../assets/bag11.jpg",
      price:"399.000đ",
      decription:"cặp táp",
      OutOfStock:true,
      NumberOfOrder:"3000",

    },

    {
      id:12,
      name:"mặt hàng 12",
      ShopName:"Cặp xinh",
      Image: "../assets/bag12.jpg",
      price:"300.000đ",
      decription:"cặp táp",
      OutOfStock:true,
      NumberOfOrder:"4000",

    },


  ]
  ItemStatus(OutOfStock: boolean): String{
    if(OutOfStock)
    {
      return 'Hết hàng'
    }
    else{
      return 'Còn hàng'
    }
  }

  itemDataChange(itemProduct: any){
    console.log(itemProduct)
  }
}
