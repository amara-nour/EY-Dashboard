import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['transactionDate', 'type', 'sendAmount', 'fee', 'receiveAmount', 'status'];
  mockData = [
    {
      transactionDate: '07/09/2022, 06:31',
      type: 'Invoiced',
      sendAmount: '$1,800',
      fee: '$2.00',
      receiveAmount: '$1,798',
      status: 'Pending'
    },
    {
      transactionDate: '06/09/2022, 22:02',
      type: 'Invoiced',
      sendAmount: '$300',
      fee: '$0.40',
      receiveAmount: '$299.60',
      status: 'Complete'
    },
    {
      transactionDate: '06/09/2022, 17:54',
      type: 'Invoiced',
      sendAmount: '$300',
      fee: '$0.40',
      receiveAmount: '$299.60',
      status: 'Complete'
    },
    {
      transactionDate: '06/09/2022, 17:54',
      type: 'Invoiced',
      sendAmount: '$300',
      fee: '$0.40',
      receiveAmount: '$299.60',
      status: 'Complete'
    },
    {
      transactionDate: '06/09/2022, 14:12',
      type: 'Invoiced',
      sendAmount: '$300',
      fee: '$0.40',
      receiveAmount: '$299.60',
      status: 'Complete'
    },
    {
      transactionDate: '05/09/2022, 17:54',
      type: 'Invoiced',
      sendAmount: '$300',
      fee: '$0.40',
      receiveAmount: '$299.60',
      status: 'Complete'
    },
    {
      transactionDate: '04/09/2022, 12:54',
      type: 'Invoiced',
      sendAmount: '$300',
      fee: '$0.40',
      receiveAmount: '$299.60',
      status: 'Complete'
    },
    {
      transactionDate: '03/09/2022, 00:38',
      type: 'Invoiced',
      sendAmount: '$300',
      fee: '$0.40',
      receiveAmount: '$299.60',
      status: 'Complete'
    },{
      transactionDate: '08/08/2023, 10:15',
      type: 'Invoiced',
      sendAmount: '$1,200',
      fee: '$2.00',
      receiveAmount: '$1,198.00',
      status: 'Complete'
    },
    {
      transactionDate: '08/08/2023, 11:30',
      type: 'Invoiced',
      sendAmount: '$450',
      fee: '$0.75',
      receiveAmount: '$449.25',
      status: 'Pending'
    },
    {
      transactionDate: '07/08/2023, 09:22',
      type: 'Refunded',
      sendAmount: '$300',
      fee: '$0.50',
      receiveAmount: '$299.50',
      status: 'Complete'
    },
    {
      transactionDate: '07/08/2023, 14:44',
      type: 'Invoiced',
      sendAmount: '$900',
      fee: '$1.50',
      receiveAmount: '$898.50',
      status: 'Failed'
    },
    {
      transactionDate: '06/08/2023, 16:05',
      type: 'Invoiced',
      sendAmount: '$250',
      fee: '$0.40',
      receiveAmount: '$249.60',
      status: 'Complete'
    },
    {
      transactionDate: '06/08/2023, 19:45',
      type: 'Paid',
      sendAmount: '$1,500',
      fee: '$2.50',
      receiveAmount: '$1,497.50',
      status: 'Pending'
    },
    {
      transactionDate: '05/08/2023, 13:30',
      type: 'Refunded',
      sendAmount: '$1,000',
      fee: '$1.00',
      receiveAmount: '$999.00',
      status: 'Complete'
    },
    {
      transactionDate: '05/08/2023, 17:00',
      type: 'Invoiced',
      sendAmount: '$2,100',
      fee: '$3.00',
      receiveAmount: '$2,097.00',
      status: 'Pending'
    },
    {
      transactionDate: '04/08/2023, 08:30',
      type: 'Invoiced',
      sendAmount: '$800',
      fee: '$1.00',
      receiveAmount: '$799.00',
      status: 'Complete'
    },
    {
      transactionDate: '04/08/2023, 12:15',
      type: 'Paid',
      sendAmount: '$600',
      fee: '$0.75',
      receiveAmount: '$599.25',
      status: 'Complete'
    },
    {
      transactionDate: '03/08/2023, 15:45',
      type: 'Invoiced',
      sendAmount: '$2,500',
      fee: '$3.50',
      receiveAmount: '$2,496.50',
      status: 'Failed'
    },
    {
      transactionDate: '02/08/2023, 18:10',
      type: 'Refunded',
      sendAmount: '$750',
      fee: '$1.25',
      receiveAmount: '$748.75',
      status: 'Complete'
    },
    {
      transactionDate: '02/08/2023, 22:30',
      type: 'Invoiced',
      sendAmount: '$1,800',
      fee: '$2.25',
      receiveAmount: '$1,797.75',
      status: 'Pending'
    },
    {
      transactionDate: '01/08/2023, 11:50',
      type: 'Paid',
      sendAmount: '$400',
      fee: '$0.50',
      receiveAmount: '$399.50',
      status: 'Complete'
    },
    {
      transactionDate: '01/08/2023, 15:30',
      type: 'Invoiced',
      sendAmount: '$3,000',
      fee: '$4.00',
      receiveAmount: '$2,996.00',
      status: 'Failed'
    },
    {
      transactionDate: '31/07/2023, 09:45',
      type: 'Paid',
      sendAmount: '$2,200',
      fee: '$3.00',
      receiveAmount: '$2,197.00',
      status: 'Pending'
    },
    {
      transactionDate: '30/07/2023, 13:25',
      type: 'Invoiced',
      sendAmount: '$900',
      fee: '$1.00',
      receiveAmount: '$899.00',
      status: 'Complete'
    },
    {
      transactionDate: '29/07/2023, 08:00',
      type: 'Refunded',
      sendAmount: '$500',
      fee: '$0.50',
      receiveAmount: '$499.50',
      status: 'Complete'
    },
    {
      transactionDate: '28/07/2023, 16:10',
      type: 'Invoiced',
      sendAmount: '$1,700',
      fee: '$2.25',
      receiveAmount: '$1,697.75',
      status: 'Pending'
    },
    {
      transactionDate: '27/07/2023, 11:55',
      type: 'Paid',
      sendAmount: '$600',
      fee: '$0.75',
      receiveAmount: '$599.25',
      status: 'Complete'
    },
  ];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true})
  sort!: MatSort;


  myForm = new FormGroup({
    mySelect: new FormControl('')
  });
  pageSize: number = 10;
  pageIndex: number = 0;
  constructor() {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any, MatPaginator>(this.mockData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize
    this.pageIndex = event.pageIndex
  }
}
