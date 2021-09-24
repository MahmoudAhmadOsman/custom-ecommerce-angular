import { BagsService } from './../../services/bags.service';
import { Component, OnInit } from '@angular/core';
import * as bags from './bags.json';
import * as caps from './caps.json';
import * as shirts from './shirts.json';


@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {

  title:string = "Bags";
  // public bags = [];
  //Bags Data
  bags: any = (bags as any).default;
  
  //Caps Data
  capsTitle:string ="Caps";
  caps: any = (caps as any).default;

  //Shirts Data
   shirtTitle:string ="Shirts";
  shirts: any = (shirts as any).default;
  constructor(private bagsService: BagsService) { }

  // private getBags() {
  //    this.bagsService.getAllBags().subscribe((data) => {
  //     this.bags = data;
  //     console.log(data);
  //   },
  //     (err) => {
  //       console.log(err);
  //     });
  //  }
 ngOnInit(): void {
    console.log(bags);
    console.log(caps);
     console.log(shirts);
  }

}
