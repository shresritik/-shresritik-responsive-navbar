import { Navbar } from "@shresritik/responsive-navbar";
import { linksTypes } from "./types";

function App() {
  const AllLinks: linksTypes[] = [
    {
      id: "3",
      name: "Explore",
      path: "/explore",
    },
    {
      id: "4",
      name: "Experience",
      path: "/studio",
    },
    {
      id: "5",
      name: "About Us",
      path: "/about",
    },
    {
      id: "6",
      name: "Contact",
      path: "/contact",
    },
  ];
  const logo =
    "https://emotion.explorug.com/MyRugStudioAssets" + "/svg/utils/logo.svg";

  return (
    <Navbar
      allLinks={AllLinks}
      logo={logo}
      logoSize={200}
      textColor={"text-white"}
      navbgColor={"bg-black"}
      activeBorderColor={"orange"}
      borderColor={"border-dorange"}
      transparent={true}
      centerLinkStatus={true}
      centerLinks={AllLinks}
    />
  );
}

export default App;
