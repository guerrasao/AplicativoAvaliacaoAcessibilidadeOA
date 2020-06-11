import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
//import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AboutPage} from "../pages/about/about";
//import {FileChooserPage} from "../pages/file-chooser/file-chooser";
import {LoEvaluationPage} from "../pages/lo-evaluation/lo-evaluation";
import {DbProvider} from "../providers/db/db";
import {ErrorDisplayProvider} from "../providers/error-display/error-display";
import {GuidelinesPage} from "../pages/guidelines/guidelines";
// import {AuthPage} from "../pages/auth/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage = HelloIonicPage;
  rootPage = null;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public dbProvider : DbProvider,
    public errorDisplay : ErrorDisplayProvider
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Início', component: HelloIonicPage },
      { title: 'Avaliar OA', component: LoEvaluationPage },
      //{ title: 'My First List', component: ListPage },
      { title: 'Diretrizes', component: GuidelinesPage},
      // { title: 'Manutenção da base de conhecimento', component:AuthPage},
      { title: 'Sobre', component: AboutPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.dbProvider.createDB().then(() => {
        this.openRootPage();
      }).catch(e => this.errorDisplay.presentAlertError(e));
    });
  }

  openRootPage(){
    this.splashScreen.hide();
    this.rootPage = HelloIonicPage;
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
