import { PopoverPageModule } from './../pages/popover/popover.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { FeedbackPage } from '../pages/feedback/feedback';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { TaggedPage } from '../pages/tagged/tagged';
import { TopicPage} from '../pages/topic/topic';
import { PopoverPage } from '../pages/popover/popover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TopicManager } from '../providers/topic-manager';
import { SafePipe } from '../providers/safe-pipe';
import { IonicStorageModule } from '@ionic/storage';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pro } from '@ionic/pro';

const IonicPro = Pro.init('APP_ID', {
  appVersion: "e1d536c5"
});

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FeedbackPage,
    HomePage,
    TabsPage,
    SettingsPage,
    TaggedPage,
    TopicPage,
    SafePipe,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TooltipsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FeedbackPage,
    HomePage,
    TabsPage,
    SettingsPage,
    TaggedPage,
    TopicPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TopicManager,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
