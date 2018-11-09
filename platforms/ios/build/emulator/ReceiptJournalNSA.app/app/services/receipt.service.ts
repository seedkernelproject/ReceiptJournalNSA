import { Injectable } from '@angular/core';
import { Receipt } from '~/shared/receipt';

import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map, catchError } from "rxjs/operators";
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';




@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  private receiptsFromURL: Observable<Receipt[]>;

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getReceiptsFromServer() : Observable<Receipt[]> {
    return this.receiptsFromURL = this.http.get(baseURL + 'api/receipts')
      .pipe(map(res => { 
        return this.processHTTPMsgService.extractData(res); }))
      .pipe(catchError(error => {return this.processHTTPMsgService.handleError(error); }));
  }


  createReceipt(receipt :JSON){
    return this.http.post(baseURL + 'api/createreceipt', receipt);
  }

  updateReceipt(receipt :Receipt){
    return this.http.post(baseURL + 'api/updatereceipt', JSON.stringify(receipt)
  );
  }
}