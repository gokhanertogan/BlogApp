import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl:string="https://localhost:44356/api/categories"

  constructor(private httpClient:HttpClient) { }
  public getCategories()
  {
      return this.httpClient.get<Category[]>(this.apiUrl);
  }

  public getCategorybyId(id:number)
  {
    let url='${this.apiUrl}/${id}';
    return this.httpClient.get<Category>(url);
  }
}
