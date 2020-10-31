import { container } from "assets/jss/material-kit-react";

import { title } from "assets/jss/material-kit-react.js";

const completedStyle = {
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  section: {
    padding: "70px 0"
  },
  container: {
    ...container,
    textAlign: "center !important"
  }
};

export default completedStyle;
