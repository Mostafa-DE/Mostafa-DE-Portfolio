import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import theme from "@/styles/theme";
import {Link} from "react-scroll";
import {sideNavData} from "@/components/SideNav/data";

interface sideNaveProps {
    open: boolean;
    setOpen: (open: sideNaveProps['open']) => void;
}

const sideNavDrawer: React.FC<sideNaveProps> = ({open, setOpen}) => {
    const toggleDrawer = () =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpen(!open)
        };


    const list = () => (
        <Box
            sx={{width: 250, backgroundColor: theme.palette.common.white}}
            role="presentation"
        >
            <List>
                {sideNavData.map(({title, idToScroll}, idx) => (
                    // @ts-ignore
                    <Link key={idx}
                          to={idToScroll}
                          spy={true}
                          duration={2000}
                          smooth={true}
                          onClick={() => setOpen(false)}
                          offset={-35}
                    >
                        <ListItem>
                            <ListItemButton>

                                <ListItemText sx={{textAlign: "center", color: theme.palette.primary.main}}
                                              primary={title}
                                />

                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                    </Link>
                ))}
            </List>

        </Box>
    );

    return (
        <React.Fragment>
            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer()}
            >
                {list()}
            </Drawer>
        </React.Fragment>
    );
}

export default sideNavDrawer;
