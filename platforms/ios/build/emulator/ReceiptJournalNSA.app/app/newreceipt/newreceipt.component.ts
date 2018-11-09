import { Component, OnInit, Inject,ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TextField } from 'ui/text-field';
import { TextView } from 'ui/text-view';
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { ReceiptService } from '~/services/receipt.service';
import { NavigationEnd, Router } from "@angular/router";


@Component({
  selector: 'app-menu',
  moduleId: module.id,
  templateUrl: './newreceipt.component.html',
  styleUrls: ['./newreceipt.component.css']
})
export class NewReceiptComponent implements OnInit {
  newreceipt: FormGroup;
  totalcost: number=0;
  profit: number=0;
  @ViewChild("datepicker") datepicker: ElementRef

  constructor(private formBuilder: FormBuilder,private receiptService: ReceiptService,
    private changeDetectorRef:ChangeDetectorRef,
    @Inject('baseURL') private baseURL,
    private router:Router) {  
    this.newreceipt = this.formBuilder.group({
      inputdate:         '',
      receiptdate:       '',
      clientname:        ['', Validators.required],
      origin:            ['', Validators.required],
      destination:       ['', Validators.required],
      totalprice:        ['', Validators.required],
      drivername:        ['', Validators.required],
      platenumber:       ['', Validators.required],
      drivercost:        ['', Validators.required],
      othercost:         ['', Validators.required],
      totalcost:         0,
      profit:            0,
      additionalremarks: '',
      status:            false,
      paiddate:          '9999-12-31',
    });  
  }

  ngOnInit() {
  }

  onTextFieldChange(args){
    let TextField = <TextField>args.object;
    var a = TextField.id;
    this.newreceipt.patchValue({a : TextField.text});
    if(TextField.id=="totalprice"){
      this.profit= parseFloat(TextField.text) - parseFloat(this.newreceipt.value.drivercost) - parseFloat(this.newreceipt.value.othercost);
      this.newreceipt.patchValue({profit : this.profit});
    }
    if(TextField.id=="drivercost"){
      this.totalcost = parseFloat(TextField.text) + parseFloat(this.newreceipt.value.othercost);
      this.profit= parseFloat(this.newreceipt.value.totalprice) - parseFloat(TextField.text) - parseFloat(this.newreceipt.value.othercost);
      this.newreceipt.patchValue({totalcost : this.profit});
      this.newreceipt.patchValue({profit : this.profit});
    }
    if(TextField.id=="othercost"){
      this.totalcost = parseFloat(this.newreceipt.value.drivercost) + parseFloat(TextField.text);
      this.profit= parseFloat(this.newreceipt.value.totalprice) - parseFloat(this.newreceipt.value.drivercost) - parseFloat(TextField.text);
      this.newreceipt.patchValue({totalcost : this.profit});
      this.newreceipt.patchValue({profit : this.profit});
    }  }

  onDatePickerSelect(args){
    let DatePicker = <DatePicker>args.object;
    console.log(DatePicker._getValue)
  }
  
  onSubmit() {
    let receiptdate = <DatePicker>this.datepicker.nativeElement;
    var date = "";
    if (receiptdate.day<10){
      date = "0"+receiptdate.day
    }else{
      date = ""+receiptdate.day
    }
    this.newreceipt.patchValue({receiptdate : receiptdate.year+"-"+receiptdate.month+"-"+date});
    console.log(JSON.stringify(this.newreceipt.value))
    this.router.navigate(['cashflow'])
    this.receiptService.createReceipt(this.newreceipt.value)
      .subscribe(res => {
        console.log(res);
      },
        errmess => {
          console.log(errmess)
      });
  }
  }
