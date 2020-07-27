export interface Mapper<T> {
  fromJson(dto: any): T;
  toJson(model: T): any;
}
