import CartIcon from "../components/icons/CartIcon";
import Corporate from "../components/icons/Corporate";
import Discount from "../components/icons/Discount";
import Help from "../components/icons/Help";
import Search from "../components/icons/Search";
import SignIn from "../components/icons/SignIn";

export const NAV_LINKS = [
  {
    id: 1,
    title: "Swiggy Corporate",
    url: "/corporate",
    icon: Corporate,
  },

  {
    id: 2,
    title: "Search",
    url: "/search",
    icon: Search,
  },

  {
    id: 3,
    title: "Offers",
    url: "/offers",
    icon: Discount,
  },

  {
    id: 4,
    title: "Help",
    url: "/help",
    icon: Help,
  },

  {
    id: 5,
    title: "Sign In",
    url: "",
    icon: SignIn,
  },

  {
    id: 6,
    title: "Cart",
    url: "/cart",
    icon: CartIcon,
  },
];
