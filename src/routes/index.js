import { lazy } from "libraries";

const HomePage = lazy(() => import('pages/Home'));

const routes = [
    { title: 'Homepage', element: <HomePage />, exact: true, path: '/' },
];

export default routes;