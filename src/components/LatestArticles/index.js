import { Container, Grid } from "libraries";

const LatestArticles = (props) => {
    return(
        <Container fixed>
            <div className={"margin__bottom--32px"}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className={"font__size--24 font__weight--600 margin__bottom--12px"}>Latest Articles</div>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <span className={"font__size--20 color__grey"}>So you can make better purchase decision</span>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"text__align--center margin__bottom--24px"}>
                        <span className={"font__size--20 color__primary"}>See more ></span>
                    </div>
                </Grid>
                {props.latestArticles.map((articles, index) => (
                    <Grid item xs={4} sm={4} md={4} lg={4} key={index}>
                        <Grid container>
                            <Grid xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--16px"}>
                                    <img src={articles.image} className={"image__article"} />
                                </div>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12}>
                                <div className={"font__weight--600 font__size--20 margin__bottom--16px"}>
                                    {articles.title}
                                </div>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--24px"}>
                                    {articles.author} <span className={"color__grey"}>| {articles.published_at}</span>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            </div>
        </Container>
    )
}

export default LatestArticles;