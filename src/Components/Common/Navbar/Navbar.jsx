import "./Navbar.scss";
import { MdSpaceDashboard } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import { Divider, Drawer, Burger, createStyles, rem, UnstyledButton, Center, Box, MantineProvider, Collapse } from "@mantine/core";
import { HashLink as Link } from "react-router-hash-link";


const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: '60',
    left: 0,
    right: 0,
    zIndex: 2,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'light' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'light' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

}));


const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const handleLinkClick = () => {
    closeDrawer(); // Funkcja, która zamyka szufladę
  };

  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>

    <div className="navbar">
      <div className="nav-logo">
        <img src="../logo-transparent.png" alt="logo" />
        <h4>Starify</h4>
      </div>
      <div className="nav-items">
        <Link to="/" smooth relative="path">
          Główna
        </Link>
        <Link to="/#services" smooth relative="path">
          Usługi
        </Link>
        <Link to="/#realizations" smooth relative="path">
          Realizacje
        </Link>
        <Link to="/shop" smooth relative="path">
          Sklep
        </Link>
        
      </div>
      
      <div className="account">
        <a href="https://www.google.com">
          <div className="button">
            <MdSpaceDashboard className="icon" />
            <p>Panel</p>
          </div>
        </a>
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          className={classes.hiddenDesktop}
                    color="#fff"
        /> 
    <Box pb={120}>

     <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="75%"
        title="Menu"
        zIndex={10}
        className={classes.dropdown}
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
        closeOnEscape={true}
      >

          <Divider my="sm" color={theme.colorScheme === 'light' ? 'light.5' : 'red.1'} />

          <a href="#" className={classes.link} onClick={handleLinkClick}>
          Główna
          </a>
          <a href="/#realizations" className={classes.link} onClick={handleLinkClick}>
          Realizacje
          </a>
          <a href="/shop" className={classes.link} onClick={handleLinkClick}>
          Sklep
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

      </Drawer>
      </Box>


      </div>
    </div>
    </MantineProvider>
  );
};

export default Navbar;
