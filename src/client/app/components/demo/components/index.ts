import { Label } from './label/label';
import { ComponentsIndex } from './components/components';
import { ImageDemo } from './image/image';



export const ComponentsRoutes: Array<any> = [
    {
        path: 'test/components/label',
        component: Label
    },
    {
        path: 'test/components/index',
        component: ComponentsIndex
    },
    {
        path: 'test/components/image',
        component: ImageDemo
    }
];


export const Components = [
    Label,
    ComponentsIndex,
    ImageDemo
];
