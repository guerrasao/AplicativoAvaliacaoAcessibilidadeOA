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
import {SQLite} from "@ionic-native/sqlite";
import { ErrorDisplayProvider } from '../providers/error-display/error-display';
import { OaDaoProvider } from '../providers/oa-dao/oa-dao';
import { MidiaDaoProvider } from '../providers/midia-dao/midia-dao';
import { MidiaOaDaoProvider } from '../providers/midia-oa-dao/midia-oa-dao';
import { RegraDaoProvider } from '../providers/regra-dao/regra-dao';
import { DeficienciaDaoProvider } from '../providers/deficiencia-dao/deficiencia-dao';
import { AtributoDaoProvider } from '../providers/atributo-dao/atributo-dao';
import { DiretrizDaoProvider } from '../providers/diretriz-dao/diretriz-dao';
import { DeficienciaHasOaDaoProvider } from '../providers/deficiencia-has-oa-dao/deficiencia-has-oa-dao';

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
    Chooser,
    SQLite,
    ErrorDisplayProvider,
    OaDaoProvider,
    MidiaDaoProvider,
    MidiaOaDaoProvider,
    RegraDaoProvider,
    DeficienciaDaoProvider,
    AtributoDaoProvider,
    DiretrizDaoProvider,
    DeficienciaHasOaDaoProvider
  ]
})
export class AppModule {}
