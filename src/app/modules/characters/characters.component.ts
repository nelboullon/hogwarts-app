import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CharactersService } from './characters.service';
import { ICharacter } from './chatacter.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  constructor(private _characters: CharactersService) {}

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  data = [] as ICharacter[];
  columnHeader = {
    image: 'Image',
    name: 'Name',
    patronus: 'Patronus',
    yearOfBirth: 'Age',
  };

  houses = ['Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuff'];
  selectedHouse = '';

  loading = true;
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.subscribeToEvents();
  }

  subscribeToEvents(): void {
    this._characters
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.data = res;
        this.loading = false;
      });
  }

  applyHouseFilter(event: any): void {
    this._characters
      .getByHouse(event.toLowerCase())
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.data = res;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
