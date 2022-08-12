import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  positionY!: number;
  innerWidth: number = 1080;
  mobile!: boolean;
  alive: boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private dialog: MatDialog,
    public service: AppService,
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.positionY = 0;
    this.alive = true;
    this.activatedRouter.fragment.subscribe((id) => {
      if (id?.includes('home') || !id) {
        id = 'container';
      }
      let el = document.getElementById(id!);
      setTimeout(() => {
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    });
    this.service
      .getPositionY()
      .pipe(takeWhile(() => this.alive))
      .subscribe((pos) => {
        this.positionY = pos;
      });
    this.mobile = this.innerWidth < 770;
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

  ngOnDestroy(): void {
    this.alive = false;
  }
}
