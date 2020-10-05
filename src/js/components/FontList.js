import React, { useState, useEffect } from 'react';
import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { drawerWidth } from '../variables';
import fontSource from '../fontSource';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const FontList = ({ search, setView, mobileOpen, closeNav }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [fontList, setFontList] = useState([]);
  const [finalList, setFinalList] = useState([]);

  useEffect(() => {
    fetch(fontSource.list)
      .then(response => response.json())
      .then(data => {
        setFontList(data);
      });
  }, []);

  useEffect(() => {
    setFinalList(
      Object.keys(fontList)
        // Filter array to items that contain search
        .filter(v => v.includes(search))
        .sort((a, b) => {
          const aIndex = a.indexOf(search);
          const bIndex = b.indexOf(search);
          // Sort by index search key is at
          if (aIndex < bIndex) {
            return -1;
          }
          if (aIndex > bIndex) {
            return 1;
          }
          // Sort alphabetically
          return 0;
        })
        .map(key => (
          // Generate Font Navigation
          <ListItem
            onClick={() => {
              setView(key);
            }}
            button
            key={key}
          >
            <ListItemText primary={key} secondary={fontList[key]} />
          </ListItem>
        ))
    );
  }, [fontList, search]);

  return (
    <nav className={classes.drawer}>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        {...(mobile
          ? // Mobile Version
            {
              variant: 'temporary',
              open: mobileOpen,
              onClose: closeNav,
              ModalProps: {
                keepMounted: true,
              },
            }
          : // Desktop Version
            { variant: 'permanent', open: true })}
      >
        {finalList}
      </Drawer>
    </nav>
  );
};

export default React.memo(FontList);
