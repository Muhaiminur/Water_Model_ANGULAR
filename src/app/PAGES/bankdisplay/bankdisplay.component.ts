import { Component, OnInit } from '@angular/core';
import { BankinfoService } from 'src/app/SERVICE/bankinfo.service';

@Component({
  selector: 'app-bankdisplay',
  templateUrl: './bankdisplay.component.html',
  styleUrls: ['./bankdisplay.component.css']
})
export class BankdisplayComponent implements OnInit {

  constructor(banklist: BankinfoService) { }

  ngOnInit() {
  }

}
