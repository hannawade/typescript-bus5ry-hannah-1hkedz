import { Component, OnInit, Input } from "@angular/core";

//The cost calculator component allows the user to input the number of minutes parked and view the cost of parking on the page.
//If the customer parks for less than 10 minutes, parking is free. If they're parked for 10 minutes to 2 hours,
//they will be charged $3. For every half hour after the first 2 hours, they will be charge $.75.

//TODO: Add some extra error handling when passed anything besides a number, add clear button

@Component({
  selector: "app-cost-calculator",
  templateUrl: "./cost-calculator.component.html",
  styleUrls: ["./cost-calculator.component.css"],
})
export class CostCalculatorComponent implements OnInit {
  constructor() {}

  @Input() mins: number;
  totalCost: string;

  ngOnInit(): void {}

  onCalculate(minsSubmitted: any) {
    this.mins = minsSubmitted;
    if (this.mins == null) {
      this.totalCost =
        "Please enter a number for minutes parked (ie 10, 90, 120)";
    } else if (this.mins < 10) {
      this.totalCost = "Parking Free";
    } else if (this.mins >= 10 && this.mins <= 120) {
      this.totalCost = "$3.00";
    } else if (this.mins > 120) {
      let overTime = this.mins - 120;
      let halfHours = Math.ceil(overTime / 30);
      this.totalCost = (3.0 + halfHours * 0.75).toString();
    } else {
      this.totalCost = "Error: onClickSubmit()";
    }
  }
}
