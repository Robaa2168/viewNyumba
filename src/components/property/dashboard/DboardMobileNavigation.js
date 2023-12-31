"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const DboardMobileNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "MAIN",
      items: [
        {
          href: "/dashboard/dashboard-home",
          icon: "flaticon-discovery",
          text: "Dashboard",
        },
        {
          href: "/dashboard/dashboard-message",
          icon: "flaticon-chat-1",
          text: "Message",
        },
      ],
    },
    {
      title: "MANAGE LISTINGS",
      items: [
        {
          href: "/dashboard/dashboard-add-property",
          icon: "flaticon-new-tab",
          text: "Add New Property",
        },
        {
          href: "/dashboard/dashboard-my-properties",
          icon: "flaticon-home",
          text: "My Properties",
        },
        {
          href: "/dashboard/dashboard-my-favourites",
          icon: "flaticon-like",
          text: "My Favorites",
        },
        {
          href: "/dashboard/dashboard-saved-search",
          icon: "flaticon-search-2",
          text: "Saved Search",
        },
        {
          href: "/dashboard/dashboard-reviews",
          icon: "flaticon-review",
          text: "Reviews",
        },
      ],
    },
    {
      title: "MANAGE ACCOUNT",
      items: [
        {
          href: "/dashboard/dashboard-my-package",
          icon: "flaticon-protection",
          text: "My Package",
        },
        {
          href: "/dashboard/dashboard-my-profile",
          icon: "flaticon-user",
          text: "My Profile",
        },
        {
          href: "/pages/login",
          icon: "flaticon-logout",
          text: "Logout",
        },
      ],
    },
  ];

  return (
    <div className="dashboard_navigationbar d-block d-lg-none">
      <div className="dropdown">
        <button
          className="dropbtn"
          onClick={() => setIsDropdownOpen((prevOpen) => !prevOpen)}
        >
          <i className="fa fa-bars pr10" /> Dashboard Navigation
        </button>
        <ul className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
          {sidebarItems.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <p
                className={`fz15 fw400 ff-heading mt30 pl30 ${
                  sectionIndex === 0 ? "mt-0" : "mt30"
                }`}
              >
                {section.title}
              </p>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="sidebar_list_item">
                  <Link
                    href={item.href}
                    className={`items-center   ${
                      pathname == item.href ? "-is-active" : ""
                    } `}
                  >
                    <i className={`${item.icon} mr15`} />
                    {item.text}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DboardMobileNavigation;
