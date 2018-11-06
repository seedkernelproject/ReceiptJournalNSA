import { Component, OnInit, Inject,ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TextField } from 'ui/text-field';
import { TextView } from 'ui/text-view';
import { DatePicker } from "tns-core-modules/ui/date-picker";

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

  constructor(private formBuilder: FormBuilder) {  
    this.newreceipt = this.formBuilder.group({
      inputdate:         Date.now(),
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
      paiddate:          '',
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
    console.log(this.newreceipt.valid);
    let receiptdate = <DatePicker>this.datepicker.nativeElement;
    this.newreceipt.patchValue({receiptdate : receiptdate.year+"-"+receiptdate.month+"-"+receiptdate.day});

    console.log(JSON.stringify(this.newreceipt.value));
  }

}