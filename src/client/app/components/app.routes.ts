// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { LayoutsRoutes } from './demo/layouts';
import { ComponentsRoutes } from './demo/components';



export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LayoutsRoutes,
  ...ComponentsRoutes
];
