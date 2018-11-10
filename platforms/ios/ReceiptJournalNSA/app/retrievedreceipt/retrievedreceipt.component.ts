import { Component, OnInit, Inject,ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TextField } from 'ui/text-field';
import { TextView } from 'ui/text-view';
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { ReceiptService } from '~/services/receipt.service';
import { Page } from 'ui/page';
import { Receipt} from "../shared/receipt";
import { NavigationEnd, Router } from "@angular/router";



@Component({
  moduleId: module.id,
  templateUrl: './retrievedreceipt.component.html',
  styleUrls: ['./retrievedreceipt.component.css']
})
export class RetrievedReceiptComponent implements OnInit {

  inputdate: string;
  retrievedReceipt: Receipt;

  constructor(private formBuilder: FormBuilder,private receiptService: ReceiptService,
    private changeDetectorRef:ChangeDetectorRef,
    @Inject('baseURL') private baseURL,
    private params: ModalDialogParams,
    private page: Page,
    private router:Router) {  
    
    this.retrievedReceipt= params.context
  }

  ngOnInit() {
  }

  onUpdate(){
    if(this.retrievedReceipt.status==false){
      this.receiptService.updateReceipt(this.retrievedReceipt)
      .subscribe(res => {
        console.log(res);
      },
        errmess => {
          console.log(errmess)
      });
    }
    //this.router.navigate(['newreceipt']);
    this.params.closeCallback();
  }

  close(){
    this.params.closeCallback();
  }
  }
