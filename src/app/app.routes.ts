import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';

import { OnboardingComponent } from './onboarding/onboarding.component';

import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

import { NorthComponent } from './north/north.component';

import { ExploreSubpageComponent } from './explore/explore-subpage/explore-subpage.component';

import { VerificationCodeComponent } from './verification-code/verification-code.component';

import { InternationalMenuComponent } from './international-menu/international-menu.component';

import { ItalianMenuComponent } from './italian-menu/italian-menu.component';

import { ChineseMaunComponent } from './chinese-maun/chinese-maun.component';
 
export const routes: Routes = [

  // Default page

  { path: 'ex', component: ExploreSubpageComponent },
 
  // Default route → Welcome screen

  { path: 'welcome', component: WelcomeScreenComponent },
 
  // Home page

  { path: 'home', component: HomeComponent },
 
  // Verification / OTP page

  { path: '', component: VerificationCodeComponent },
 
  // Login / Registration

  { path: '', component: UserSignInComponent },
 
  // North page

  { path: 'north', component: NorthComponent },
 
  // Onboarding screen

  { path: 'onboarding', component: OnboardingComponent },
 
  // Welcome screen (explicit route)

  { path: 'welcome', component: WelcomeScreenComponent },

  // international-menu
  { path: 'international-menu', component: InternationalMenuComponent },

   // italian
  { path: 'italian-menu', component: ItalianMenuComponent },

  // chinese-menu
  { path: 'chinese-menu', component: ChineseMaunComponent },
 
  // Redirect unknown paths

  { path: '**', redirectTo: '' },

];

 