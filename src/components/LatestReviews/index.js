import { Container, Grid } from "libraries";
import { People5 } from "libraries/images";
import { Rating } from "@mui/material";

const LatestReviews = (props) => {
    return(
        <Container>
            <div className={"margin__bottom--40px"}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className={"font__size--24 font__weight--600 margin__bottom--12px"}>Latest Reviews</div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <span className={"font__size--20 color__grey"}>So you can make better purchase decision</span>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <div className={"text__align--center margin__bottom--40px"}>
                            <span className={"font__size--20 color__primary"}>See more ></span>
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                        <Grid container>
                            {props.latestReviews.map((review, index) => (
                                <Grid item xs={6} sm={6} md={6} lg={6} key={index}>
                                    <div className={"list__review"}>
                                        <Grid container>
                                            <Grid item xs={3} sm={3} md={3} lg={3}>
                                                <img src={review.product.image} width={100} height={100} />
                                            </Grid>
                                            <Grid item xs={9} sm={9} md={9} lg={9}>
                                                <div className={"padding__top--12px padding__left--24px"}>
                                                    <div className={"font__weight--600"}>
                                                        {review.product.name}
                                                    </div>
                                                    <div>
                                                        {review.product.desc}
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                                <div className={"border__top padding__top--8px"}>
                                                    <Rating 
                                                        name={"rating"} 
                                                        value={review.star} 
                                                        precision={0.5} 
                                                        className={"color__primary font__size--14"}
                                                        readOnly />
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                                <div className={"text__align--right color__grey border__top padding__top--8px"}>
                                                    2 hours ago
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <div className={"margin__top--8px font__size--14"}>
                                                    {review.comment}
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className={"text__align--center"}>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <div className={"image__preview"}>
                                                <img src={People5} width={50} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <div className={"margin__bottom--8px"}>
                                                {review.user}
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <div className={"color__grey font__size--14"}>
                                                {`${review.profile} `}
                                            </div>
                                        </Grid>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <div className={"mr"}>
                            <span className={"font__size--32"}>MR 2<br/>300x250</span>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default LatestReviews;