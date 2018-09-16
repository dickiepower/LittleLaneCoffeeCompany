import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LittleLaneHeaderComponent } from './little-lane-header/little-lane-header.component';
import { CoreModule } from './core/core.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopComponent } from './shop/shop.component';
import { MenuComponent } from './menu/menu.component';
import { StoryComponent } from './story/story.component';
import { SocialComponent } from './social/social.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CoffeeMenuComponent } from './coffee-menu/coffee-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LittleLaneHeaderComponent,
    HomepageComponent,
    ShopComponent,
    MenuComponent,
    StoryComponent,
    SocialComponent,
    CoffeeMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
