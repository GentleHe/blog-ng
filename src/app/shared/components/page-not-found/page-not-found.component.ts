import { Component, OnInit } from '@angular/core';
import anime from "animejs";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {timeout} from "rxjs";
// import {anime} from 'animejs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {


  constructor(private router: Router, private ms: NzMessageService) {
  }

  ngOnInit(): void {

    anime({
      targets: '.row svg',
      translateY: 10,
      autoplay: true,
      loop: true,
      easing: 'easeInOutSine',
      direction: 'alternate'
    });


    anime({
      targets: '#zero',
      translateX: 10,
      autoplay: true,
      loop: true,
      easing: 'easeInOutSine',
      direction: 'alternate',
      scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
      rotateY: {value: '+=180', delay: 200},
    });

    this.ms.create('warning', '未知链接，即将跳转主页');
    setTimeout(()=>{
      this.router.navigate(['/'])

    }, 3000)

  }



}
