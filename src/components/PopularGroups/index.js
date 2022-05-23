import { Container, Grid } from "libraries";
import { People1, People2, People3, People4, User, Setting, Chat } from "libraries/images";

const PopularGroups = () => {
    return(
        <Container>
            <div className={"margin__bottom--40px"}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className={"font__size--24 font__weight--600 margin__bottom--12px"}>Popular Groups</div>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10}>
                        <span className={"font__size--20 color__grey"}>Where the beauty TALK are</span>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <div className={"text__align--center margin__bottom--40px"}>
                            <span className={"font__size--20 color__primary"}>See more ></span>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className={"list__group"}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center margin__bottom--12px"}>
                                    <img src={People1} className={"image__group margin__top--12px"} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center font__size--24 font__weight--600 margin__bottom--24px"}>
                                    Embrace the Curl
                                </div>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className={"text__align--right"}>
                                        <img src={User} className={"image__group--button"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className={"text__align--center"}>
                                        <img src={Setting} className={"image__group--button"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <img src={Chat} className={"image__group--button"} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"description__group"}>
                                    May our curls pop and never stop!
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className={"list__group"}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center margin__bottom--12px"}>
                                    <img src={People2} className={"image__group margin__top--12px"} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center font__size--24 font__weight--600 margin__bottom--24px"}>
                                    Embrace the Curl
                                </div>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className={"text__align--right"}>
                                        <img src={User} className={"image__group--button"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className={"text__align--center"}>
                                        <img src={Setting} className={"image__group--button"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <img src={Chat} className={"image__group--button"} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"description__group"}>
                                    May our curls pop and never stop!
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className={"list__group"}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center margin__bottom--12px"}>
                                    <img src={People3} className={"image__group margin__top--12px"} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center font__size--24 font__weight--600 margin__bottom--24px"}>
                                    Embrace the Curl
                                </div>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className={"text__align--right"}>
                                        <img src={User} className={"image__group--button"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className={"text__align--center"}>
                                        <img src={Setting} className={"image__group--button"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <img src={Chat} className={"image__group--button"} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"description__group"}>
                                    May our curls pop and never stop!
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className={"list__group"}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center margin__bottom--12px"}>
                                    <img src={People4} className={"image__group margin__top--12px"} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center font__size--24 font__weight--600 margin__bottom--24px"}>
                                    Embrace the Curl
                                </div>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className={"text__align--right"}>
                                        <img src={User} className={"image__group--button"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className={"text__align--center"}>
                                        <img src={Setting} className={"image__group--button"} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <img src={Chat} className={"image__group--button"} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"description__group"}>
                                    May our curls pop and never stop!
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default PopularGroups;