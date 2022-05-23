import { Container, Grid } from "libraries";
import { Video1, Video2, Video3 } from "libraries/images";

const LatestVideos = () => {
    return(
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className={"font__size--24 font__weight--600 margin__bottom--12px"}>Latest Videos</div>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <span className={"font__size--20 color__grey"}>Watch and learn, ladies</span>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"text__align--center margin__bottom--40px"}>
                        <span className={"font__size--20 color__primary"}>See more ></span>
                    </div>
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                    <img src={Video1} width={730} height={410} />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className={"margin__bottom--4px"}>
                                <img src={Video2} width={350} height={200} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <img src={Video3} width={350} height={200} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LatestVideos;