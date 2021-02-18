import { Component, OnInit, Input } from '@angular/core';
import { ButtonSize, ButtonColor, ButtonType } from './button.component.d';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() size: ButtonSize | undefined;
  @Input() type: ButtonColor | undefined;
  buttonType: ButtonType = 'default';

  ngOnInit() {
    if (this.size === 'small') {
      if (!this.type) {
        this.buttonType = 'small';
        return;
      }
      switch (this.type) {
        case 'primary':
          this.buttonType = 'small-primary';
          return;
        case 'error':
          this.buttonType = 'small-error';
          return;
        case 'warning':
          this.buttonType = 'small-warning';
          return;
      }
    } else if (this.size === 'large') {
      if (!this.type) {
        this.buttonType = 'large';
        return;
      }
      switch (this.type) {
        case 'primary':
          this.buttonType = 'large-primary';
          return;
        case 'error':
          this.buttonType = 'large-error';
          return;
        case 'warning':
          this.buttonType = 'large-warning';
          return;
      }
    } else {
      if (!this.type) {
        this.buttonType = 'default';
        return;
      }
      switch (this.type) {
        case 'primary':
          this.buttonType = 'default-primary';
          return;
        case 'error':
          this.buttonType = 'default-error';
          return;
        case 'warning':
          this.buttonType = 'default-warning';
          return;
      }
    }
  }
}
