import { Component, OnInit, Inject,ChangeDetectorRef,ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Receipt } from '../shared/receipt';
import { ReceiptService } from '../services/receipt.service';
import { RetrievedReceiptComponent} from "../retrievedreceipt/retrievedreceipt.component"
import { Location } from '@angular/common';
import { NavigationEnd, Router } from "@angular/router";
import { yearProperty } from 'tns-core-modules/ui/date-picker/date-picker';



@Component({
  selector: 'app-menu',
  moduleId: module.id,
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.css']
})
export class CashflowComponent implements OnInit {

  receipts: Receipt[];
  errMess:string;
  paidReceipts: Receipt[];
  unpaidReceipts: Receipt[];
  totalPaidProfit: number = 0;
  totalUnpaidProfit: number = 0;
  totalUnpaidReceipt: number = 0;



  constructor(private receiptService: ReceiptService,
    private modalService: ModalDialogService,
    private changeDetectorRef:ChangeDetectorRef,
    @Inject('baseURL') private baseURL,
    private vcRef: ViewContainerRef,
    private location:Location) {  


    }

  ngOnInit() {

    this.receiptService.getReceiptsfromURL().subscribe(
      res =>{
        this.paidReceipts=[];
        this.unpaidReceipts=[];
        this.totalPaidProfit = 0;
        this.totalUnpaidProfit = 0;
        this.totalUnpaidReceipt = 0;
        this.receipts = res.sort(function(a, b){
          var nameA=a.inputdate.toLowerCase(), nameB=b.inputdate.toLowerCase()
          if (nameA < nameB) 
              return 1 
          if (nameA > nameB)
              return -1
          return 0 
      });

        for (var receipt of this.receipts){
          if(receipt.status==true){
            this.paidReceipts.push(receipt);
            this.totalPaidProfit += receipt.profit;
          }
          if(receipt.status==false){
            this.unpaidReceipts.push(receipt);
            this.totalUnpaidProfit += receipt.profit;
            this.totalUnpaidReceipt += parseFloat(receipt.totalprice);
          }
        }
        this.paidReceipts.sort(function(a, b){
          var dateA=+new Date(parseInt(a.paiddate.slice(6)),parseInt(a.paiddate.slice(3,5)),parseInt(a.paiddate.slice(0,2)));
          var dateB=+new Date(parseInt(b.paiddate.slice(6)),parseInt(b.paiddate.slice(3,5)),parseInt(b.paiddate.slice(0,2)));
          return dateB-dateA 
        });
        console.log(this.numberWithCommas(this.totalPaidProfit));

      },errMes => this.errMess = errMes);



    
      
  }

  createModalView(args) {
    var retrievedReceipt = this.receipts.filter(x => x.inputdate==args)[0];

    let options: ModalDialogOptions = {
        viewContainerRef: this.vcRef,
        context: retrievedReceipt,
        fullscreen: false
    };

    this.modalService.showModal(RetrievedReceiptComponent, options)
    .then((result:any) => {this.ngOnInit();})
  }
  
  numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

}