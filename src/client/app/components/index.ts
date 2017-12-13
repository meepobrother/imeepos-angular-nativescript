import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { LayoutsComponents } from './test/layouts';



export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent,
  ...LayoutsComponents
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
export { AbsoluteLayoutComponent } from './test/layouts/absolute-layout/absolute-layout.component';

