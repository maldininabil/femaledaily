import { Fragment, Helmet, lazy, useState } from "libraries";

import data from "configs/data/api.json";

const NavbarNavigation = lazy(() => import('containers/NavbarNavigation'));
const EditorChoice = lazy(() => import('components/EditorChoice'));
const Matches = lazy(() => import('components/Matches'));
const LatestArticles = lazy(() => import('components/LatestArticles'));
const LatestReviews = lazy(() => import('components/LatestReviews'));
const PopularGroups = lazy(() => import('components/PopularGroups'));
const LatestVideos = lazy(() => import('components/LatestVideos'));
const Trending = lazy(() => import('components/Trending'));
const Brands = lazy(() => import('components/Brands'));

const Home = () => {
    const [editorsChoice] = useState(data["editor's choice"]);
    const [latestArticles] = useState(data["latest articles"]);
    const [latestReviews] = useState(data["latest review"]);
    
    return(
        <Fragment>
            <Helmet>
                <title>Homepage</title>
            </Helmet>
            <NavbarNavigation />
            <div className={"top-frame"}>
                <span className={"font__size--32"}>Top Frame 970x50</span>
            </div>
            <div className={"billboard"}>
                <span className={"font__size--32"}>Billboard 970x250</span>
            </div>
            <EditorChoice editorsChoice={editorsChoice} />
            <Matches />
            <div className={"campaign"}>
                <span className={"font__size--32"}>Horizontal 970x250<br/>(Internal campaign only)</span>
            </div>
            <LatestArticles latestArticles={latestArticles} />
            <LatestReviews latestReviews={latestReviews} />
            <PopularGroups />
            <LatestVideos />
            <Trending trending={editorsChoice} />
            <Brands />
        </Fragment>
    )
}

export default Home;