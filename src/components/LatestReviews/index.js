import { Container, Grid } from "libraries";

const LatestReviews = () => {
    return(
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className={"font__size--24 font__weight--600 margin__bottom--12px"}>Latest Reviews</div>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <span className={"font__size--20 color__grey"}>So you can make better purchase decision</span>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"text__align--center margin__bottom--40px"}>
                        <span className={"font__size--20 color__primary"}>See more ></span>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LatestReviews;