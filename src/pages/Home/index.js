import { Fragment, Helmet, lazy, useEffect, useState, } from "libraries";

import data from "configs/data/api.json";
import { getWP } from "services";

const NavbarNavigation = lazy(() => import('containers/NavbarNavigation'));
const EditorChoice = lazy(() => import('components/EditorChoice'));
const Matches = lazy(() => import('components/Matches'));
const LatestArticles = lazy(() => import('components/LatestArticles'));
const LatestReviews = lazy(() => import('components/LatestReviews'));
const PopularGroups = lazy(() => import('components/PopularGroups'));
const LatestVideos = lazy(() => import('components/LatestVideos'));
const PopupVideo = lazy(() => import('components/PopupVideo'));
const Trending = lazy(() => import('components/Trending'));
const Brands = lazy(() => import('components/Brands'));
const Footer = lazy(() => import('components/Footer'));

const Home = () => {
    const [editorsChoice, setEditorChoice] = useState([]);
    const [latestArticles, setLatestArticles] = useState([]);
    const [latestReviews, setLatestReviews] = useState([]);
    const [trending] = useState(data["trending"]);
    const [ youtubeId, setYoutubeId ] = useState(null);
    const [ openYoutube, setOpenYoutube ] = useState(false);

    useEffect(() => {
        getWP({}).then(response => {
            setEditorChoice(response["editor's choice"]);
            setLatestArticles(response["latest articles"]);
            setLatestReviews(response["latest review"]);
        })
    }, [])

    function handleShowYoutube(id) {
        setYoutubeId(id);
        setOpenYoutube(true);
    }

    function handleCloseYoutube () {
        setOpenYoutube(false);
    }
    
    return(
        <Fragment>
            <Helmet>
                <title>Female Daily</title>
            </Helmet>
            <NavbarNavigation />
            <div className={"container"}>
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
                <LatestVideos handleShowYoutube={handleShowYoutube} />
                <PopupVideo youtubeId={youtubeId} openYoutube={openYoutube} handleCloseYoutube={handleCloseYoutube} />
                <Trending trending={trending} />
                <Brands />
            </div>
            <hr className={"border__default margin__top--40px"} />
            <Footer />
            <div className={"bottom-frame"}>
                <span className={"font__size--32"}>Bottom Frame 970x50 468x60 320x50</span>
            </div>
        </Fragment>
    )
}

export default Home;