import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

/**
 * @title Basic checkboxes
 */
@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'checkbox-overview-example.html',
})
export class CheckboxOverviewExample {
  sameAsCurrentAdd: boolean = false;
  diffAsCurrentAdd: boolean = false;
  clickColor: string = 'primary';

  onClickSameAs(event: MatCheckboxChange): void {
    if (event.checked) {
      this.sameAsCurrentAdd = true;
      this.diffAsCurrentAdd = false;
    }
  }

  onClickDiffAs(event: MatCheckboxChange): void {
    if (event.checked) {
      this.diffAsCurrentAdd = true;
      this.sameAsCurrentAdd = false;
    }
  }
}
