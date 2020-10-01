import React from 'react';
import { Link, Route } from 'react-router-dom';

import { Example as Props } from './01-props';
import { Example as PropTypes } from './02-prop-types';
import { Example as Styling } from './03-styling';
import { Example as Composition } from './04-composition';
import { Example as State } from './05-state';
import { Example as UncontrolledForm } from './06-uncontrolled-form';
import { Example as ControlledForm } from './07-controlled-form';
import { Example as DataFetching } from './08-data-fetching';
import { Example as RoutesHandling } from './09-routes-handling';

const exercises = [
    { title: 'Props', component: Props },
    { title: 'PropTypes', component: PropTypes },
    { title: 'Styling', component: Styling },
    { title: 'Composition', component: Composition },
    { title: 'State', component: State },
    { title: 'Uncontrolled Form', component: UncontrolledForm },
    { title: 'Controlled Form', component: ControlledForm },
    { title: 'Data Fetching', component: DataFetching },
    { title: 'Routes Handling', component: RoutesHandling }
].map(e => ({
    ...e,
    slug: e.title
        .split(' ')
        .join('-')
        .toLowerCase()
}));

function Exercises({ match }) {
    return (
        <div>
            {exercises.map(({ slug, component }) => (
                <Route key={slug} path={`/exercise/${slug}`} component={component} />
            ))}
            <Route
                exact
                path={match.url}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function List() {
    return (
        <div>
            <ol style={{ paddingLeft: 0 }}>
                {exercises.map(({ slug, title }) => (
                    <li key={slug}>
                        <Link to={`/exercise/${slug}`}>{title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Exercises;

export { List };
