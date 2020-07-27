import { HttpParams } from '@angular/common/http';
import { defaultsDeep } from 'lodash';

export class Page<T> {
  private static readonly _default: () => Partial<Page<any>> = () => ({
    limit: 20,
    number: 0,
    search: '',
    first: true,
    last: true,
    content: [],
    totalPages: 1
  });

  readonly limit: number;
  readonly offset: number;
  readonly number: number;
  readonly search: string;
  readonly first: boolean;
  readonly last:boolean;
  readonly content: T[];
  readonly totalPages: number;

  constructor(page?: Partial<Page<T>>) {
    defaultsDeep(this, page, Page._default());
  }

  public toHttpParams(): HttpParams {
    let params: HttpParams = new HttpParams();
    params = params.append('limit', String(this.limit));
    params = this.number > -1 ? params.append('offset', String(this.limit * this.number)) : params;
    params = this.search !== '' ? params.append('search', this.search) : params;
    return params;
  }
}
