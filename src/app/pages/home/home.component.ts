import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public scroll: ScrollDispatcher,
    private activatedRouter: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRouter.fragment.subscribe((id) => {
      if (!id) {
        id = 'container'
      }
      let aux = id;
      let el = document.getElementById(aux);
      el?.scrollIntoView({ behavior: 'smooth' });
    });
    // this.scroll.scrolled().subscribe((resp) => {
    //   this.appService.setScroll(this.onWindowScroll(resp!));
    // });
  }

  openDialog(type: string) {
    this.dialog.open(PopUpComponent, {
      maxWidth: '95vw',
      data: {
        type: type,
        callback: () => this.dialog.closeAll(),
      },
    });
  }

  // onWindowScroll(data: CdkScrollable): boolean {
  //   return data.getElementRef().nativeElement.scrollTop > 30;
  // }
}
