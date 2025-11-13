// Only the minimal data we need per your request
import badgeIcon from "../../assets/icons/IdentificationBadge.png";
import IconSet1 from "../../assets/icons/IconSet.png";
import IconSet2  from "../../assets/icons/IconSet (1).png";
import IconSet3 from "../../assets/icons/IconSet (2).png";
import IconSet4 from "../../assets/icons/IconSet (3).png";
export const sidebarData = [
  {
    section: "Favorites",
    items: [
      { label: "Overview" },
      { label: "Projects" },
    ],
  },
  {
    section: "Dashboards",
    items: [
      { label: "Default", path: "/" },
      { label: "eCommerce", path: "/ecommerce" },
    ],
  },
  {
    section: "Pages",
    items: [
      {
        label: "User Profile",
        hasDropdown: true,
        subItems: ["Overview", "Projects", "Campaigns", "Documents"],
        icon: badgeIcon
      },
      { label: "Account" ,
        icon: IconSet1
      },
      { label: "Corporate",
        icon: IconSet2
       },
      { label: "Blog" ,
        icon: IconSet3      
      },
      { label: "Social" ,
        icon: IconSet4
      },
    ],
  },
];
