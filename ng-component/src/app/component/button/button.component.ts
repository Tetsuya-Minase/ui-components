import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() size: 'small' | 'large';
  @Input() type: 'primary' | 'error' | 'warning';

  buttonClasses: string[] = ['button'];

  ngOnInit() {
    switch (this.size) {
      case 'small':
        this.buttonClasses.push('button--small');
        break;
      case 'large':
        this.buttonClasses.push('button--large');
        break;
      default:
        const _neverSize: never = this.size;
        console.error(`${_neverSize} is invalid.`);
    }
    switch (this.type) {
      case 'primary':
        this.buttonClasses.push('button--primary');
        break;
      case 'error':
        this.buttonClasses.push('button--error');
        break;
      case 'warning':
        this.buttonClasses.push('button--warning');
        break;
      default:
          const _neverType: never = this.type;
        console.error(`${_neverType} is invalid.`);
    }
  }

}
