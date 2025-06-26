import { Routes } from '@angular/router';
import { Fabrics } from './fabrics/fabrics';
import { Patterns } from './patterns/patterns';
import { Projects } from './projects/projects';
import { Dashboard } from './dashboard/dashboard';
import { FabricDetails } from './fabric-details/fabric-details';
import { PatternDetails } from './pattern-details/pattern-details';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'fabrics',
        component: Fabrics
    },
    {
        path: 'fabrics/:id',
        component: FabricDetails
    },
    {
        path: 'patterns',
        component: Patterns
    },
    {
        path: 'patterns/:id',
        component: PatternDetails
    },
    {
        path: 'projects',
        component: Projects
    }
];
