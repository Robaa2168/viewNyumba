import mobileMenuItems from "@/data/mobileMenuItems";
import { isParentActive } from "@/utilis/isMenuActive";
import { usePathname } from "next/navigation"; // Import from next/router
import React from 'react';
import Link from "next/link"; // Import Link component from Next.js
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const ProSidebarContent = () => {
  const path = usePathname();

  const isParentActive = (children, path) => {
    if (!children || !path) {
      return false;
    }

    return children.some((item) => {
      if (item.href === path) {
        return true;
      } else if (item.subMenu) {
        return isParentActive(item.subMenu, path);
      }
      return false;
    });
  };

  return (
    <Sidebar width="100%" backgroundColor="#fff" className="my-custom-class">
      <Menu>
        {mobileMenuItems.map((item, index) => (
         <SubMenu
         key={index}
         label={item.label}
         component={<Link href={item.href || '#'}/> }// Use path or href based on the structure
         className={isParentActive([item], path) ? 'active' : ''}
       >
         {item.subMenu ? (
           item.subMenu.map((subItem, subIndex) => (
             <MenuItem
               key={subIndex}
               component={<Link href={subItem.href}/> } // Use path or href based on the structure
               className={isParentActive([subItem], path) ? 'active' : ''}
             >
                 {subItem.label}
             </MenuItem>
           ))
         ) : null}
       </SubMenu>
       
        ))}
      </Menu>
    </Sidebar>
  );
};

export default ProSidebarContent;
