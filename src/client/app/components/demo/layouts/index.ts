import { AbsoluteLayoutComponent } from './absolute-layout/absolute-layout.component';
import { DockLayoutComponent } from './dock-layout/dock-layout';
import { FlexboxLayoutComponent } from './flexbox-layout/flexbox-layout';
import { FlexboxLayoutColumnReverseComponent } from './flexbox-layout-column-reverse/flexbox-layout-column-reverse';
import { FlexboxLayoutColumnComponent } from './flexbox-layout-column/flexbox-layout-column';
import { FlexboxLayoutRowReverseComponent } from './flexbox-layout-row-reverse/flexbox-layout-row-reverse';
import { FlexboxLayoutRowComponent } from './flexbox-layout-row/flexbox-layout-row';


export const LayoutsRoutes: Array<any> = [
    {
        path: 'test/layouts/absolute',
        component: AbsoluteLayoutComponent
    },
    {
        path: 'test/layouts/dock',
        component: DockLayoutComponent
    },
    {
        path: 'test/layouts/flexbox',
        component: FlexboxLayoutComponent
    },
    {
        path: 'test/layouts/flexbox-column-reverse',
        component: FlexboxLayoutColumnReverseComponent
    },
    {
        path: 'test/layouts/flexbox-column',
        component: FlexboxLayoutColumnComponent
    },
    {
        path: 'test/layouts/flexbox-row-reverse',
        component: FlexboxLayoutRowReverseComponent
    },
    {
        path: 'test/layouts/flexbox-row',
        component: FlexboxLayoutRowComponent
    },

    {
        path: 'test/layouts/flexbox-flex-end',
        component: FlexboxLayoutFlexEndComponent
    },
    {
        path: 'test/layouts/flexbox-multi',
        component: FlexboxLayoutMultiComponent
    },
    {
        path: 'test/layouts/flexbox-order',
        component: FlexboxLayoutOrderComponent
    },
    {
        path: 'test/layouts/flexbox-space-around',
        component: FlexboxLayoutSpaceAroundComponent
    },
    {
        path: 'test/layouts/flexbox-space-between',
        component: FlexboxLayoutSpaceBetweenComponent
    },
    {
        path: 'test/layouts/flexbox-wrap',
        component: FlexboxLayoutWrapComponent
    },
    {
        path: 'test/layouts/flexbox-wrap-reverse',
        component: FlexboxLayoutWrapReserveComponent
    },
];

import { FlexboxLayoutFlexEndComponent } from './flexbox-layout-flex-end/flexbox-layout-flex-end';
import { FlexboxLayoutMultiComponent } from './flexbox-layout-multi/flexbox-layout-multi';
import { FlexboxLayoutOrderComponent } from './flexbox-layout-order/flexbox-layout-order';
import { FlexboxLayoutSpaceAroundComponent } from './flexbox-layout-space-around/flexbox-layout-space-around';
import { FlexboxLayoutSpaceBetweenComponent } from './flexbox-layout-space-between/flexbox-layout-space-between';

import { FlexboxLayoutWrapComponent } from './flexbox-layout-wrap/flexbox-layout-wrap';
import { FlexboxLayoutWrapReserveComponent } from './flexbox-layout-wrap-reverse/flexbox-layout-wrap-reverse';



export const LayoutsComponents = [
    AbsoluteLayoutComponent,
    DockLayoutComponent,
    FlexboxLayoutComponent,
    FlexboxLayoutColumnReverseComponent,
    FlexboxLayoutColumnComponent,
    FlexboxLayoutRowReverseComponent,
    FlexboxLayoutRowComponent,

    FlexboxLayoutFlexEndComponent,
    FlexboxLayoutMultiComponent,
    FlexboxLayoutOrderComponent,
    FlexboxLayoutSpaceAroundComponent,
    FlexboxLayoutSpaceBetweenComponent,
    FlexboxLayoutWrapComponent,
    FlexboxLayoutWrapReserveComponent
];
