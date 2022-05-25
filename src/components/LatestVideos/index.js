import { Container, Grid } from "libraries";
import { FaPlay } from "react-icons/fa";

const LatestVideos = (props) => {
    return(
        <Container>
            <div className={"margin__bottom--40px"}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className={"font__size--24 font__weight--600 margin__bottom--12px"}>Latest Videos</div>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10}>
                        <span className={"font__size--20 color__grey"}>Watch and learn, ladies</span>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <div className={"text__align--center margin__bottom--40px"}>
                            <span className={"font__size--20 color__primary cursor__pointer"}>
                                See more >
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                        <div className={"video"} onClick={() => props.handleShowYoutube("j5T_DPgQPNw")}>
                            <img src={"https://img.youtube.com/vi/j5T_DPgQPNw/maxresdefault.jpg"} quality={70} width={730} height={410} />
                            <FaPlay className={"play__button"} />
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--4px video"} onClick={() => props.handleShowYoutube("yuLcRK9tDk4")}>
                                    <img src={"https://img.youtube.com/vi/yuLcRK9tDk4/maxresdefault.jpg"} quality={70} width={350} height={200} />
                                    <FaPlay className={"play__button"} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"video"} onClick={() => props.handleShowYoutube("FvbNZd-IxK4")}>
                                    <img src={"https://img.youtube.com/vi/FvbNZd-IxK4/maxresdefault.jpg"} quality={70} width={350} height={200} />
                                    <FaPlay className={"play__button"} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default LatestVideos;