import { Dialog, DialogActions, useTheme, useMediaQuery, DialogContent, Button } from "@mui/material";
import { YouTube } from "libraries";

const PopupVideo = (props) => {
    const { handleCloseYoutube, openYoutube, youtubeId } = props;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return(
        <Dialog
            fullScreen={fullScreen}
            fullWidth={true}
            maxWidth={'md'}
            open={openYoutube}
            onClose={handleCloseYoutube}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogContent>
                <YouTube
                    videoId={youtubeId} opts={opts}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseYoutube} color="secondary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PopupVideo;