import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Exercises, {List} from './exercises';

function App() {
    return (
        <BrowserRouter>
            <Route
                path="/"
                render={props => (
                    <div>
                        <div>
                            <h1>Exercises</h1>
                            <List {...props} />
                        </div>
                        <div>
                            <h1>Your Implementation</h1>
                            <Exercises {...props} />
                        </div>
                    </div>
                )}
            />
        </BrowserRouter>
    );
}

export default App;
