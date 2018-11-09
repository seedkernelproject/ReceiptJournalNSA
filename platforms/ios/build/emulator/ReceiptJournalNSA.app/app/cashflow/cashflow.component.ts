import { Component, OnInit, Inject,ChangeDetectorRef,ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Receipt } from '../shared/receipt';
import { ReceiptService } from '../services/receipt.service';
import { RetrievedReceiptComponent} from "../retrievedreceipt/retrievedreceipt.component"
import { Location } from '@angular/common';
import { NavigationEnd, Router } from "@angular/router";



@Component({
  selector: 'app-menu',
  moduleId: module.id,
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.css']
})
export class CashflowComponent implements OnInit {

  receipts: Receipt[];
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
    this.receiptService.getReceiptsFromServer().subscribe(
      res =>{
        this.receipts = res;
        this.paidReceipts=[];
        this.unpaidReceipts=[];

        console.log(this.totalUnpaidReceipt);

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
      });
    
      
  }

  createModalView(args) {
    var retrievedReceipt = this.receipts.filter(x => x.inputdate==args)[0];

    let options: ModalDialogOptions = {
        viewContainerRef: this.vcRef,
        context: retrievedReceipt,
        fullscreen: false
    };

    this.modalService.showModal(RetrievedReceiptComponent, options)
    .then((result:any) => {this.ngOnInit(); window.location.reload()})
  }



}