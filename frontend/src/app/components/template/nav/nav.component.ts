import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
