import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { LayoutsComponents } from './demo/layouts';
import { Components } from './demo/components';



export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent,
  ...LayoutsComponents,
  ...Components
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
