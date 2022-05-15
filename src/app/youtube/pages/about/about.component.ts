import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { selectDataSearchItems } from 'src/app/redux/selectors/youtube.selector';
import { SearchItem } from '../../models/card-item.model';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public item?: SearchItem;

  public id: string;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router, private store: Store) {
    this.id = this.route.snapshot.params['id'];
    this.store.select(selectDataSearchItems).pipe(take(1)).subscribe((values) => {
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
