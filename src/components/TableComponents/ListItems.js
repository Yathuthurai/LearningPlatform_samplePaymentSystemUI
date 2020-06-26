import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import DnsIcon from "@material-ui/icons/Dns";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ProfileAvatar from "./shared/ProfileAvatar";

export const mainListItems = (
  <div>
    <ListSubheader inset>
      <p style={{ paddingLeft: "20%" }}>Profile</p>
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PermIdentityIcon style={{ color: "red" }} />
      </ListItemIcon>
      <ProfileAvatar />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DnsIcon style={{ color: "orange" }} />
      </ListItemIcon>
      <ListItemText primary="Thurai Yathu" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactMailIcon style={{ color: "dodgerblue" }} />
      </ListItemIcon>
      <ListItemText
        style={{ color: "dodgerblue" }}
        primary="example@gmail.com"
      />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="over_all" />
    </ListItem>
  </div>
);

/*
<ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
*/
