import { Label } from './label/label';
import { ComponentsIndex } from './components/components';


export const ComponentsRoutes: Array<any> = [
    {
        path: 'test/components/label',
        component: Label
    },
    {
        path: 'test/components/index',
        component: ComponentsIndex
    }
];


export const Components = [
    Label,
    ComponentsIndex
];
