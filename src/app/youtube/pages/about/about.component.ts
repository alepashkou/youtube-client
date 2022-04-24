import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { SearchItem } from '../../models/search-item.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public item?: SearchItem;

  public id: string;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.dataService.data$.pipe(take(1)).subscribe((values) => {
      const findItem = values.find((el) => el.id === this.id);
      if (!findItem) {
        this.dataService.getDataItem(this.id).subscribe((value) => this.item = value);
      } else {
        this.item = findItem;
      }
    });
  }

  public goToMain():void {
    this.router.navigate(['']);
  }
}
