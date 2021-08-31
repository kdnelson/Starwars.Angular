import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Manager } from 'src/app/models/manager';

@Component({
  selector: 'cm-managers-grid',
  templateUrl: './managers-grid.component.html',
  styleUrls: ['./managers-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagersGridComponent implements OnInit {
  className: string = "ManagersGridComponent";
  @Input() managers: Manager[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}