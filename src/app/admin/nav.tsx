"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
    AccountBalance,
    DarkModeOutlined,
    Dashboard,
    DashboardOutlined,
    GroupOutlined,
    HomeMaxOutlined,
    HomeOutlined,
    LeaderboardOutlined,
    LoginOutlined,
    LogoutOutlined,
    MailOutline,
    PeopleAltOutlined,
    Person2Outlined,
    Shop2Outlined,
    TrendingUpOutlined
} from "@mui/icons-material";
import Link from "next/link";

const drawerWidth = 240;

export default function AdminNav({ children }: any) {
    const [darkMood, setDarkMode] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const setMode = () => {
        if (!darkMood) {
            setDarkMode(true);
            document.documentElement.classList.add("dark")
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark")
        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const menuItems = [
        {
            title: "Dashboard",
            icon: <Dashboard />,
            link: "/admin/dashboard"
        },
        {
            title: "Users",
            icon: <GroupOutlined />,
            link: "/admin/users"
        },
        {
            title: "Accounts",
            icon: <DashboardOutlined />,
            link: "/admin/accounts"
        },
        {
            title: "Trades",
            icon: <TrendingUpOutlined />,
            link: "/admin/trades"
        },
        {
            title: "Mail",
            icon: <MailOutline />,
            link: "/admin/mailers"
        },
        // {
        //     title: "Others",
        //     icon: <Shop2Outlined />,
        //     link: "/clientarea/others"
        // },
        // {
        //     title: "Trading Space",
        //     icon: <TrendingUpOutlined />,
        //     link: "/clientarea/trading-space"
        // },
        // {
        //     title: "Refer A Trader",
        //     icon: <PeopleAltOutlined />,
        //     link: "/clientarea/referal"
        // }
    ]

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {menuItems.map((menu, index) => (
                    <Link href={menu.link} key={index}>
                        <ListItem disablePadding>

                            <ListItemButton>
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <p className="text-xs py-2 md:text-sm">
                                    {
                                        menu.title
                                    }
                                </p>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Box
                position="fixed"
                zIndex="100"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
                    ml: { sm: `${drawerWidth}px` },
                }}
                className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-xs md:text-sm"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="flex justify-between w-full">
                        <div className="flex">
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                sx={{ mr: 2 }}
                                onClick={setMode}
                            >
                                <DarkModeOutlined />
                            </IconButton>

                            <Typography component="p" variant="inherit" sx={{ mt: 1.5, display: { xs: "none", sm: "block" } }}>
                                Admin Panel
                            </Typography>
                        </div>

                        <div className="flex justify-evenly md:w-2/5 w-full">
                            <button className="bg-gray-300 hover:bg-gray-400 text-white font-bold px-1 rounded border ">
                                $0.00
                            </button>
                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">
                                <p className="sm:block hidden">
                                    Traders Login
                                </p>

                                <span className="text-xs">
                                    <LoginOutlined fontSize="inherit" sx={{
                                        display: {
                                            sm: "none"
                                        }
                                    }} />
                                </span>

                            </button>

                            <button className="bg-red-400 hover:bg-red-500 text-gray-200 font-semibold py-2 px-4 rounded shadow">


                                <p className="sm:block hidden">
                                    Log Out
                                </p>

                                <LogoutOutlined sx={{
                                    display: {
                                        sm: "none"
                                    }
                                }} />
                            </button>
                        </div>
                    </div>
                </Toolbar>
            </Box>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"

            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                    className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-xs md:text-sm"
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                    open
                    className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-xs md:text-sm"
                >
                    
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <div className="h-16"></div>
                {
                    children
                }
            </Box>
        </Box>
    );
}
