import { Container, Grid } from "libraries";
import { Rating } from "@mui/material";

const Trending = (props) => {
    return(
        <Container>
            <div className={"margin__bottom--40px"}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className={"font__size--24 font__weight--600 margin__bottom--12px"}>Tranding The Week</div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className={"font__size--20 color__grey"}>See our weekly most reviewed products</div>
                    </Grid>
                    {props.trending.map((data, index) => (
                        <Grid item xs={2} sm={2} md={2} lg={2} key={index}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div className={"margin__bottom--8px"}>
                                        <img src={data.product.image} width={150} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div className={"margin__bottom--8px margin__left--8px"}>
                                        <Grid container>
                                            <Grid item xs={2} sm={2} md={2} lg={2} className={"text__center"}>
                                                <div className={"font__weight--600 margin__right--4px"}>{
                                                    data.product.rating}
                                                </div>
                                            </Grid>
                                            <Grid item xs={7} sm={7} md={7} lg={7}>
                                                <div>
                                                    <Rating 
                                                        name={"rating"} 
                                                        value={data.product.rating} 
                                                        precision={0.5} 
                                                        className={"color__primary font__size--14"}
                                                        readOnly />
                                                </div>
                                            </Grid>
                                            <Grid item xs={2} sm={2} md={2} lg={2} className={"text__center"}>
                                                <div>
                                                    (7)
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div className={"margin__bottom--8px margin__left--8px"}>
                                        <span className={"font__weight--600"}>{data.product.name}</span>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div className={"margin__left--8px"}>
                                        <span>{data.product.description}</span>
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

export default Trending;