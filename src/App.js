import { Fragment, BrowserRouter, Routes, Route } from 'libraries';
import { Suspense } from 'react';
import routes from 'routes';

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
