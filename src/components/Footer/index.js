import { Container, Grid } from "libraries";
import { AppStore, GooglePlay, Logo } from "libraries/images";

const Footer = () => {
    return(
        <Container>
            <div className={"margin__top--40px margin__bottom--24px"}>
                <Grid container>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className={"footer__menu"}>
                            <ul>
                                <li>About Us</li>
                                <li>Feedback</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className={"footer__menu"}>
                            <ul>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className={"footer__menu"}>
                            <ul>
                                <li>Awards</li>
                                <li>Newsletter</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className={"font__size--14 font__weight--600 padding__top--16px padding__bottom--16px"}>
                            Download Our Mobile App
                        </div>
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <img src={AppStore} alt={"app-store"} width={130} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <img src={GooglePlay} alt={"google-play"} width={145} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className={"margin__top--24px"}>
                <Grid container>
                    <Grid item xs={9} sm={9} md={9} lg={9}>
                        <div>
                            <img src={Logo} alt={"logo"} width={170} />
                        </div>
                        <div>Copyright 2015 - 2017 Female Daily Network All rights reserved</div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default Footer;