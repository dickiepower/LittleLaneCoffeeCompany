import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './src/app/homepage/homepage.component';
import { ShopComponent } from './src/app/shop/shop.component';
import { StoryComponent } from './src/app/story/story.component';
import { SocialComponent } from './src/app/social/social.component';
import { CoffeeMenuComponent } from './src/app/coffee-menu/coffee-menu.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'the-shop', component: ShopComponent},
  {path: 'menu', component: CoffeeMenuComponent},
  {path: 'our-story', component: StoryComponent},
  {path: 'social', component: SocialComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
