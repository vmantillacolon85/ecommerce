import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
// import classes from '*.module.css';

import logo from "../../assets/scoop.png"
// import classes from '*.module.css';

import useStyles from "./styles";


const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <ToolBar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Scoop.js" height="25px" className={classes.image} />
                    Scoop.js
                </Typography>
                <div className={classes.grow} />
                <div div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </ToolBar>
        </AppBar>
        </>
    )
}

export default Navbar
