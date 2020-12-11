import { BagsService } from './../../services/bags.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {

  title:string = "Bags";
  public bags = [];
  constructor(private bagsService: BagsService) { }

  ngOnInit(): void {
    //this.getBags(); 
    this.bagsService.getAllBags().subscribe((data) => {
      this.bags = data;
      console.log(data);
    },
      (err) => {
        console.log(err);
      });
  }

  // private getBags() {
  //    this.bagsService.getAllBags().subscribe((data) => {
  //     this.bags = data;
  //     console.log(data);
  //   },
  //     (err) => {
  //       console.log(err);
  //     });
  //  }





}
