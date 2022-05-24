import { Box, Button, Fragment, Grid } from "libraries";
import { Blush, Pigment, Serum, MatchesImage } from "libraries/images";

const Matches = () => {
    return(
        <Fragment>
            <Box sx={{ bgcolor: '#fddae0', height: '50vh' }} className={"margin__bottom--40px"}>
                <Grid container>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <img src={MatchesImage} className={"image__matches"} />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className={"box__text"}>
                            <p className={"font__size--24 font__weight--600"}>
                                Looking for products that are just simply perfect for you?
                            </p>
                            Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?
                        </div>
                        <div className={"text__align--right"}>
                            <Button className={"button__primary"}>See My Matches</Button>
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <div className={"margin__bottom--40px list__matches"}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center margin__top--12px margin__bottom--8px"}>
                                    <img src={Blush} width={150} height={170} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--16px"}>
                                    <span className={"font__weight--600 color__primary"}>Match Skin Type</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--16px"}>
                                    <span className={"font__weight--600 margin__right--4px"}>4.9</span>
                                    <span>(7)</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--16px"}>
                                    <span className={"font__weight--600"}>VAL BY VALERIE THOMAS</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--16px"}>
                                    <span>Pure Pressed Blush</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--32px margin__left--16px"}>
                                    <span>Neutral Rose</span>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <div className={"margin__bottom--40px list__matches"}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center margin__top--12px margin__bottom--8px"}>
                                    <img src={Pigment} width={150} height={170} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--16px"}>
                                    <span className={"font__weight--600 color__primary"}>Match Skin Type</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--8px"}>
                                    <span className={"font__weight--600 margin__right--4px"}>4.9</span>
                                    <span>(7)</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--8px"}>
                                    <span className={"font__weight--600"}>VAL BY VALERIE THOMAS</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--8px"}>
                                    <span>Phito Pigment Liquid Serum Foundation</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--16px margin__left--16px"}>
                                    <span>Neutral Rose</span>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <div className={"margin__bottom--40px list__matches"}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"text__align--center margin__top--12px margin__bottom--8px"}>
                                    <img src={Serum} width={150} height={170} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--16px"}>
                                    <span className={"font__weight--600 color__primary"}>Match Skin Type</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--8px"}>
                                    <span className={"font__weight--600 margin__right--4px"}>4.9</span>
                                    <span>(7)</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--8px"}>
                                    <span className={"font__weight--600"}>VAL BY VALERIE THOMAS</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--8px margin__left--8px"}>
                                    <span>Pure Pressed Blush</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className={"margin__bottom--32px margin__left--16px"}>
                                    <span>Neutral Rose</span>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}

export default Matches;