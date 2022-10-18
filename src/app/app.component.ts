import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchValue: string = '';
  selectedRowData: any = {}

  onSearch(event: any) {
    this.searchValue = event
  }

  onSelectedRowData(event: any) {
    this.selectedRowData = event
  }
}
