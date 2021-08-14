import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/app/core/navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  readonly navigation = Navigation

  constructor() { }

  ngOnInit(): void {
  }

}
