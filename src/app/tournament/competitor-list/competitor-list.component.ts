import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-competitor-list',
  templateUrl: './competitor-list.component.html',
  styleUrls: ['./competitor-list.component.scss'],
})
export class CompetitorListComponent implements OnInit {
  @Input() competitors: string[];
  @Output() onRemoveCompetitor = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  remove(index: number): void {
    this.onRemoveCompetitor.emit(index);
  }
}
