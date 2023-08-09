import "./Navbar.scss";
import { MdSpaceDashboard } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Transition, Paper, createStyles, rem } from "@mantine/core";
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
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

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
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

}));


const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const { classes, cx } = useStyles();

  return (
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
          opened={opened}
          onClick={toggle}
          aria-label={label}
          className="burger"
          color="#fff"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
            </Paper>
          )}
        </Transition>

      </div>
    </div>
  );
};

export default Navbar;
