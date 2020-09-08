import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-competitor-list',
  templateUrl: './competitor-list.component.html',
  styleUrls: ['./competitor-list.component.scss'],
})
export class CompetitorListComponent implements OnInit {
  @Input() competitors: string[];

  @Output() onAddCompetitor = new EventEmitter<string>();
  @Output() onRemoveCompetitor = new EventEmitter<number>();

  @ViewChild('competitorInput') competitorInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  add(name: string): void {
    if (!name) return;
    this.onAddCompetitor.emit(name);
    this.competitorInput.nativeElement.value = '';
    this.competitorInput.nativeElement.focus();
  }

  remove(index: number): void {
    this.onRemoveCompetitor.emit(index);
  }
}
