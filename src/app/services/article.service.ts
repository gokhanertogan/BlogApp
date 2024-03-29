import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ArticlePg } from "../models/article-pg";
import { tap } from "rxjs/operators";
import { Article } from '../models/article';
import { Archive } from '../models/archive';
@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}
  public loading: boolean = true;
  private apiUrl: string = "https://localhost:44356/api/articles";

  getSearchArticles(searchText:string,page:number,pageSize:number){
    let api='${this.apiUrl}/SearchArticles/${searchText}/${page}/${pageSize}';

    return this.httpClient.get<ArticlePg>(api).pipe(
      tap(x=>{
        this.loading=false;
      })
    )
  }

  getArticles(page: number, pageSize: number) {
    let api = `${this.apiUrl}/${page}/${pageSize}`;

    return this.httpClient.get<ArticlePg>(api).pipe(
      tap(x => {
        this.loading = false;
      })
    );
  }

  getArticlesWithCategory(categoryId:number,page:number,pageSize:number)
  {
    let api = `${this.apiUrl}/GetArticlesWithCategory/${categoryId}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap(x=>{
        this.loading=false;
      })
    );
  }

  getArticlesByMostView(){
    let api = `${this.apiUrl}/GetArticlesByMostView`;
    return this.httpClient.get<Article[]>(api);

  }

  getArticlesArchive(){
    let api='${this.apiUrl}/GetArticlesArchive';
    return this.httpClient.get<Archive[]>(api);
  }

  getArticle(id:number){
    let api='${this.apiUrl}/{id}';
    this.loading=false;
    return this.httpClient.get<Article>(api);
  }

  getArticleArchiveList(year:number,month:number,page:number,pageSize:number)
  {
    let api='${this.apiUrl}/GetArticleArchiveList/${year}/${month}/${page}/${pageSize}';
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap(x=>{
        this.loading=false;
      })
    );
  }

  articlViewCountUp(id:number)
  {
    let api='${this.apiUrl}/ArticleViewCountUp/${id}';
    return this.httpClient.get(api);
  }

}
