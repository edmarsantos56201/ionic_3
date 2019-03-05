import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonNavPush } from '../../../node_modules/@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})


export class IntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

gotoTabspage(){
  IonNavPush.arguments(TabsPage)
}
}


