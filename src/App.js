import { Fragment, BrowserRouter, Routes, Route } from 'libraries';
import { Suspense } from 'react';
import routes from 'routes';

import "assets/scss/global.scss";

function App() {
  return (
    <Fragment>
        <Suspense fallback={null}>
          <BrowserRouter>
            <Routes>
              {routes.map((route, index) => <Route {...route} key={index} />)}
            </Routes>
          </BrowserRouter>
        </Suspense>
    </Fragment>
  );
}

export default App;
