import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
}

export default function Header(props: HeaderProps) {
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
