import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Navigation } from 'src/app/core/navigation';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(private _dashboard: DashboardService) {}

  characters = [] as any;
  students = [] as any;
  staff = [] as any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  navigation = Navigation;

  ngOnInit(): void {
    this.subscribeToEvents();
  }

  subscribeToEvents(): void {
    this._dashboard
      .get()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.characters = res[0];
        this.students = res[1];
        this.staff = res[2];
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
