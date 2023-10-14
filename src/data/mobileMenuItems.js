module.exports = [
  {label: "Home", href: "/"},
  { label: "listing", href: "/listing" },
     
  {
    label: "Profile",
    subMenu: [
      { label: "Dashboard", href: "/dashboard/dashboard-home" },
      { label: "Message", href: "/dashboard/dashboard-message" },
      { label: "New Property", href: "/dashboard/dashboard-add-property" },
      { label: "My Properties", href: "/dashboard/dashboard-my-properties" },
      { label: "My Favorites", href: "/dashboard/dashboard-my-favourites" },
      { label: "Saved Search", href: "/dashboard/dashboard-saved-search" },
      { label: "Reviews", href: "/dashboard/dashboard-reviews" },
      { label: "My Package", href: "/dashboard/dashboard-my-package" },
      { label: "My Profile", href: "/dashboard/dashboard-my-profile" },       
    ],
  },
 
  { href: "/blog/blogs/page", label: "Blog" },

  {
    label: "About",
    subMenu: [
      { href: "/pages/about", label: "About" },
      { href: "/pages/faq", label: "Faq" },
      { href: "/pages/contact", label: "Contact" },
    ],
  },
];
