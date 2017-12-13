// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { LayoutsRoutes } from './demo/layouts';


export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LayoutsRoutes
];
