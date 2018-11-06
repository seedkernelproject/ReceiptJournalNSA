import { Component, OnInit, Inject,ChangeDetectorRef } from '@angular/core';
import { Receipt } from '../shared/receipt';
import { ReceiptService } from '../services/receipt.service';

@Component({
  selector: 'app-menu',
  moduleId: module.id,
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.css']
})
export class CashflowComponent implements OnInit {

  receipts: Receipt[];
  errMess: string;
  paidReceipts: Receipt[];
  unpaidReceipts: Receipt[];
  totalPaidProfit: number;
  totalUnpaidProfit: number;
  totalUnpaidReceipt: number;



  constructor(private receiptService: ReceiptService,
    private changeDetectorRef:ChangeDetectorRef,
    @Inject('baseURL') private baseURL) {  
    }

  ngOnInit() {
    this.receiptService.getReceipts()
      .subscribe(receipts => {
        this.receipts = receipts;
        this.paidReceipts=[];
        this.unpaidReceipts=[];
        this.totalPaidProfit=0;
        this.totalUnpaidProfit=0;
        this.totalUnpaidReceipt=0
        for (var receipt of this.receipts){
          if(receipt.status==true){
            this.paidReceipts.push(receipt);
            this.totalPaidProfit += receipt.profit;
          }else{
            this.unpaidReceipts.push(receipt);
            this.totalUnpaidProfit += receipt.profit;
            this.totalUnpaidReceipt += receipt.totalprice;
          }
        }
        console.log(this.totalPaidProfit);
      },
        errmess => this.errMess = <any>errmess);
      
  }

}