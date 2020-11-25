import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banklist } from '../Banklist';

@Injectable({
  providedIn: 'root'
})
export class BankinfoService {

  public bank_list: Banklist[];
  constructor(private http: HttpClient) {
    this.get_bank_list();
  }
  //get Buy History
  private get_bank_list() {
    const httpOptions = {
      headers: new HttpHeaders({
        'User-Agent': 'request'
      })
    };
    const url = "https://raw.githubusercontent.com/Muhaiminur/Nested-Fragment-Android/master/banklisj.json";
    this.http.get(url, httpOptions)
      .subscribe(res => {
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);
        this.bank_list = resJSON;
        console.log(this.bank_list)
      })
  }

}
