export const isParentActive = (children, path) => {
    if (!children || !path) {
            return false;
          }
      
          return children.some((item) => {
            if (item.path === path) {
              return true;
            } else if (item.subMenu) {
              return isParentActive(item.subMenu, path);
            }
            return false;
          });
};
 