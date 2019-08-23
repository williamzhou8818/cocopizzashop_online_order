import { Component, OnInit, Inject } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { AuthService } from 'src/app/auth.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


export interface Transaction {
  item: string;
  cost: number;
}


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']

})



export class AdminOrdersComponent implements OnInit {
  orders$;
  today: number = Date.now();
  closeResult: string;
  isdone:boolean;


  constructor(
            public dialog: MatDialog,
            private authService: AuthService,
            private orderService: OrderService,
            config: NgbModalConfig, 
              private modalService: NgbModal) {

    this.orders$ = this.orderService.getOrders();
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit() {
  }

  Isdone(id) {
   // console.log(id)
   
    this.orders$.subscribe(orders => {
        let objectkeys = Object.keys(orders)
        for(let orderId of   objectkeys) {
          if(orderId == id)
          console.log(orderId);
        }
     // console.log(orders)
        } 
    )
    this.isdone = !this.isdone
   // console.log(this.isdone)
   // this.orderService.makeisdone(id, this.isdone)

    
  }

  open(content) {
    this.modalService.open(content);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'order-details.component.html',
})
export class DialogContentExampleDialog {
  orders$;
  show:boolean = true;
  constructor(
    private orderService: OrderService,
    public dialogRef: MatDialogRef<DialogContentExampleDialog>) {
      this.orders$ = this.orderService.getOrders();

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}