import { Container, Grid } from "libraries";
import { Nivea } from "libraries/images";

const EditorChoice = (props) => {
    return(
        <Container fixed>
            <div className={"font__size--24 font__weight--600 margin__bottom--12px"}>Editor's Choice</div>
            <div className={"font__size--20 color__grey"}>Curated with love</div>
            <Grid container>
                {props.editorsChoice.map((choice, index) => (
                    <Grid item xs={2} sm={2} md={2} lg={2} key={index} className={"list__editor"}>
                        <div className={"margin__top--24px"}>
                            <Grid container>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <div className={"text__align--right margin__right--8px image__editor"}>
                                        <img src={Nivea} width={55} height={55} />
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <div className={"font__weight--600 margin__bottom--8px"}>{choice.editor}</div>
                                    <div className={"font__size--12 color__grey"}>{choice.role}</div>
                                </Grid>
                                <div className={"margin__bottom--40px list__product"}>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <div className={"margin__bottom--8px margin__left--8px padding__top--8px"}>
                                            <img src={choice.product.image} width={200} height={250} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <div className={"margin__bottom--8px margin__left--8px"}>
                                            <span className={"font__weight--600 margin__right--4px"}>{choice.product.rating}</span>
                                            <span>(7)</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <div className={"margin__bottom--8px margin__left--8px"}>
                                            <span className={"font__weight--600"}>{choice.product.name}</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <div className={"margin__bottom--32px margin__left--8px"}>
                                            <span>{choice.product.description}</span>
                                        </div>
                                    </Grid>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default EditorChoice;