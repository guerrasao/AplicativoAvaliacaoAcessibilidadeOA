import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbProvider } from '../providers/db/db';
import {AboutPage} from "../pages/about/about";
import {FileChooserPage} from "../pages/file-chooser/file-chooser";
import {LoEvaluationPage} from "../pages/lo-evaluation/lo-evaluation";
import { NavigationProvider } from '../providers/navigation/navigation';
import {Chooser} from "@ionic-native/chooser";
import {ValidateFileExtensionPage} from "../pages/validate-file-extension/validate-file-extension";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AboutPage,
    FileChooserPage,
    LoEvaluationPage,
    ValidateFileExtensionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AboutPage,
    FileChooserPage,
    LoEvaluationPage,
    ValidateFileExtensionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbProvider,
    NavigationProvider,
    Chooser
  ]
})
export class AppModule {}
