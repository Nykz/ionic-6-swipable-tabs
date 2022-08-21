import { IonTabs } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild('tabs') tabs: IonTabs;

  constructor() {}

  onSwipe(event) {
    if(event?.swipeType == 'moveend') {
      console.log(event);
      const currentTab = this.tabs.getSelected();
      console.log('currentTab: ', currentTab);
      const nextTab = this.getNextTab(currentTab, event?.dirX);
      console.log(nextTab);
      if(nextTab) this.tabs.select(nextTab);
    }
  }

  getNextTab(currentTab, direction) {
    switch(currentTab) {
      case 'tab1': if(direction == 'left') return 'tab2'; else return null;
      case 'tab2': if(direction == 'right') return 'tab1'; else return 'tab3';
      case 'tab3': if(direction == 'right') return 'tab2'; else return null;
    }
  }

}
