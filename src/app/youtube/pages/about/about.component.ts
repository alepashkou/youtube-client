import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public item?:SearchItem;

  public id?: string;

  constructor(public route: ActivatedRoute, public dataService: DataService, public router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.data$.subscribe((values) => this.item = values.find((el) => el.id === this.id));
  }

  goToMain():void {
    this.router.navigate(['']);
  }
}
