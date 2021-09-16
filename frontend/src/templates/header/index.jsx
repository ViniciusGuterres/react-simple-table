import React from "react";

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Header(props) {

  function renderLinks() {
    const allLinks = props.links || [];

    return allLinks.map((link) => {
      return (
        <li style={styles.li}>
          {/* will go to the path passed throw props when clicks */}
          <Link
            to={link.path}
            style={styles.a}
          >
            {link.title}
          </Link>
        </li>
      );
    });
  };

  return (
    <header style={styles.header}>
      <Router>
        <ul style={styles.ul}>{renderLinks()}</ul>
      </Router>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#464e54",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: 'flex-end'
  },
  ul: {
    listStyle: "none",
    display: "flex",
  },
  li: {
    marginRight: "30px",
    fontSize: "17px",
    cursor: "pointer",
    borderRight: '1px solid #ffffff',
    paddingRight: '20px'
  },
  a: {
    color: '#fff',
    textDecoration: 'none'
  }
};
