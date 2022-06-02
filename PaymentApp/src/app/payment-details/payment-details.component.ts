import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService,
   public toastr:ToastrService ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:PaymentDetail){
        this.service.formData= Object.assign({},selectedRecord);
  }

  onDelete(paymentDetailId:number){
    if(confirm('Are you sure to delete this row')){
      this.service.deletePaymentDetail(paymentDetailId).subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted Successfully", "Payment Detail");
        },
        err=>{console.log(err)}
      )}
    }

}


