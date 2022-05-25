import { Container, Grid } from "libraries";
import { Nivea, Maybelline, SKII, TheOrdinary, TheBodyShop, Innisfree } from "libraries/images";

const Brands = () => {
    return(
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className={"font__size--24 font__weight--600 margin__bottom--12px"}>Top Brands</div>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <span className={"font__size--20 color__grey"}>We all know and love</span>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"text__align--center margin__bottom--40px"}>
                        <span className={"font__size--20 color__primary cursor__pointer"}>
                            See more >
                        </span>
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"image"}>
                        <img src={Nivea} alt={"Nivea"} />
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"image"}>
                        <img src={TheOrdinary} alt={"The Ordinary"} />
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"image"}>
                        <img src={TheBodyShop} alt={"The Body Shop"} />
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"image"}>
                        <img src={SKII} alt={"SK II"} />
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"image"}>
                        <img src={Maybelline} alt={"Maybelline"} />
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className={"image"}>
                        <img src={Innisfree} alt={"Innisfree"} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className={"margin__top--40px margin__bottom--40px font__size--20"}>
                        <p className={"font__size--24 font__weight--600"}>
                            Female Daily - Find everything you want to know about beauty on Female Daily
                        </p>
                        Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, indisde and out!
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Brands;