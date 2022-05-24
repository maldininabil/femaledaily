import { Logo } from "libraries/images";
import { AppBar, Box, IconButton, InputBase, Toolbar, Typography, styled, alpha, Button } from "@mui/material";
import { FaBars, FaSearch } from "react-icons/fa";

const NavbarNavigation = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
    }));

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" className={"navbar"}>
                <Toolbar className={"navbar__border"}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <FaBars />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    <img src={Logo} width={160} height={40} />
                </Typography>
                <Search>
                    <SearchIconWrapper>
                    <FaSearch />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search products, articles, topics, brands, etc"
                    inputProps={{ 'aria-label': 'search' }}
                    className={"navbar__search"}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button className={"navbar__button"}>LOGIN / SIGNUP</Button>
                </Box>
                </Toolbar>
                <div className={"navbar__border navbar__menu"}>
                    <ul>
                        <li>SKINCARE</li>
                        <li>MAKE UP</li>
                        <li>BODY</li>
                        <li>HAIR</li>
                        <li>FRAGRANCE</li>
                        <li>NAILS</li>
                        <li>TOOLS</li>
                        <li>BRANDS</li>
                    </ul>
                </div>
            </AppBar>
        </Box>
    )
}

export default NavbarNavigation;