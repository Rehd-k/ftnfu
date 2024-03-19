"use client"
import * as React from "react";
import Box from "@mui/material/Box";
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
    DarkModeOutlined,
    HomeMaxOutlined,
    HomeOutlined,
    LeaderboardOutlined,
    Logout,
    LogoutOutlined,
    PeopleAltOutlined,
    Person2Outlined,
    TrendingUpOutlined
} from "@mui/icons-material";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

export default function ClientDrawer({ user, children }: any) {
    const pathname = usePathname()
    const [darkMood, setDarkMode] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        
    }, [pathname])

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

    // React.useEffect(() => {
    //     const handleStart = () => setIsLoading(true);
    //     const handleComplete = () => setIsLoading(false);

    //     router.events.on("routeChangeStart", handleStart);
    //     router.events.on("routeChangeComplete", handleComplete);
    //     router.events.on("routeChangeError", handleComplete);

    //     return () => {
    //         router.events.off("routeChangeStart", handleStart);
    //         router.events.off("routeChangeComplete", handleComplete);
    //         router.events.off("routeChangeError", handleComplete);
    //     };
    // }, [router]);
    const menuItems = [
        {
            title: "Accounts Overview",
            icon: <HomeMaxOutlined />,
            link: "/clientarea/accounts-overview"
        },
        {
            title: "Dashboard",
            icon: <HomeOutlined />,
            link: "/clientarea/dashboard"
        },
        {
            title: "Leader Board",
            icon: <LeaderboardOutlined />,
            link: "/clientarea/leader-board"
        },
        {
            title: "Profile",
            icon: <Person2Outlined />,
            link: "/clientarea/profile"
        },
        {
            title: "Trading Space",
            icon: <TrendingUpOutlined color="inherit" />,
            link: "/clientarea/trading-space"
        },
        {
            title: "Refer A Trader",
            icon: <PeopleAltOutlined />,
            link: "/clientarea/referal"
        },
        {
            title: "Log out",
            icon: <Logout />,
            link: "/clientarea/logout"
        }
    ]

    const drawer = (
        <div className="pt-10 h-full dark:bg-gray-900 dark:text-gray-100">
            <List>
                {menuItems.map((menu, index) => (
                    <Link href={menu.link} key={index}>
                        <ListItem disablePadding>

                            <ListItemButton>
                                <ListItemIcon className="dark:text-gray-100">
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
            {/* <CssBaseline /> */}
            <Box
                position="fixed"
                zIndex="100"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
                    ml: { sm: `${drawerWidth}px` },
                }}
                className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 text-xs md:text-sm"
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
                                Hello, {user.user.name}
                            </Typography>
                        </div>



                        <button onClick={() => signOut()} className="bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 text-white font-bold px-2 rounded-full border ">
                            <LogoutOutlined className="dark:text-gray-200 text-gray-800" />
                        </button>
                    </div>
                </Toolbar>
            </Box>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                className="bg-gray-200"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    color="inherit"
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
                <div className="md:h-16 w-full h-12"></div>
                {
                    children
                }
            </Box>
        </Box>
    );
}
