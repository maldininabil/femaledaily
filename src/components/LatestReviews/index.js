import { Container, Grid, SlickSlider } from "libraries";
import { People5 } from "libraries/images";
import { Rating } from "@mui/material";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const NextArrowHorizontal = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{left: '53.5%', fontSize: '18px', zIndex: '1', top: '100%', color: 'red'}}
        >
            <FaChevronRight color={'#dc2850'} />
        </div>
    );
};

const PrevArrowHorizontal = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{left: '45%', fontSize: '18px', zIndex: '1', top: '100%', color: 'red'}}
        >
            <FaChevronLeft color={'#dc2850'} />
        </div>
    );
};

const LatestReviews = (props) => {
    const { className, onClick } = props;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        dotsClass: "slick-dots slick-thumb",
        prevArrow: <PrevArrowHorizontal className={className} onClick={onClick} />,
        nextArrow: <NextArrowHorizontal className={className} onClick={onClick} />
    };

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
                            <span className={"font__size--20 color__primary cursor__pointer"}>
                                See more >
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                        <SlickSlider {...settings}>
                            {props.latestReviews.map((review, index) => (
                                <div className={"margin__bottom--24px"} key={index}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
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
                                            <div className={"list__preview"}>
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
                                    </Grid>
                                </div>
                            ))}
                        </SlickSlider>
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