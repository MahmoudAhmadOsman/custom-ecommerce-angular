import { BagsService } from './../../services/bags.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {

  title:string = "Bags";
  bags = [];
  constructor(private bagsService: BagsService) { }

  ngOnInit(): void {
  }

}
