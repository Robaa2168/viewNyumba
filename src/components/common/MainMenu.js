import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
} from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });
    blogItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("blog");
      }
    });
    // pageItems.forEach((elm) => {
    //   if (elm.href.split("/")[1] == pathname.split("/")[1]) {
    //     setTopMenu("pages");
    //   }
    // });

    const pathParts = pathname.split("/"); // Split the current pathname into parts

    pageItems.forEach((item) => {
      const itemPathParts = item.href.split("/");
      
      if (itemPathParts[1] === pathParts[1]) {
        setTopMenu("pages");
        setSubmenu(item.label);
      }
    });

    propertyItems.forEach((item) => {
      const itemPathParts = item.href.split("/");
      
      if (itemPathParts[1] === pathParts[1]) {
        setTopMenu("property");
        setSubmenu(item.label);
      }
    });

    listingItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("listing");
      }
    });
    }, []);

  const handleActive = (link) => {
    if (link.split("/")[1] == pathname.split("/")[1]) {
      return "menuActive";
    }
  };
  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <a className="list-item" href="/">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Home
          </span>
        </a>
      </li>
      {/* End homeItems */}

      <li className="megamenu_style dropitem">
        <a className="list-item" href="/listing">
          <span className={topMenu == "listing" ? "title menuActive" : "title"}>
            Listing
          </span>
        </a>
      </li>
      {/* End listings */}

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={topMenu == "property" ? "title menuActive" : "title"}
          >
            Property
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {propertyItems.map((item, index) => (
            <li key={index} className="dropitem">
              <a href= {item.href}>
                <span
                  className={
                    submenu == item.label ? "title menuActive" : "title"
                  }
                >
                  {item.label}
                </span>
                <span className="arrow"></span>
              </a>
            </li>
          ))}
        </ul>
      </li>
      {/* End property Items */}

      <li className="visible_list dropitem">
        <a className="list-item" href="/blog/blogs/page">
          <span className={topMenu == "blog" ? "title menuActive" : "title"}>
            Blog
          </span>
        </a>
      </li>
      {/* End blog Items */}

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "pages" ? "title menuActive" : "title"}>
            Pages
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
        {pageItems.map((item, index) => (
            <li key={index}>
              <a href= {item.href}>
                <span
                  className={
                    submenu == item.label ? "title menuActive" : "title"
                  }
                >
                  {item.label}
                </span>
                <span className="arrow"></span>
              </a>
            </li>
          ))}
        </ul>
      </li>
      {/* End pages Items */}
    </ul>
  );
};

export default MainMenu;
