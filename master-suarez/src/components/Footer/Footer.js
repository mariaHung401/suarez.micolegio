import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://micolegio.com/"
                className={classes.block}
                target="_blank"
              >
                Entra a Micolegio
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , Hecho con{" "}
          <Favorite className={classes.icon} /> por {" "}
          <a
            href="http://micolegio.com/"
            className={aClasses}
            target="_blank"
          >
            Micolegio
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
