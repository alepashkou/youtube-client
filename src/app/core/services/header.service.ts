import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public search: string = '';

  public sort:string = '';

  public filter:string = '';
}
