import { MdOutlineDashboardCustomize, MdTextsms, MdGroupAdd } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { FaDoorOpen, FaBalanceScale,  } from "react-icons/fa";
import { BsFillPersonCheckFill, BsFillDatabaseFill } from "react-icons/bs";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { AiFillFolderOpen } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

export const Links = [
  {
    links: [
      {
        name: "Dashboard",
        icon: <MdOutlineDashboardCustomize />,
      },
    ],
  },
  {
    links: [
      {
        name: "properties",
        icon: <GiFamilyHouse />,
      },
    ],
  },
  {
    links: [
      {
        name: "rooms",
        icon: <FaDoorOpen />,
      },
    ],
  },
  {
    links: [
      {
        name: "tenants",
        icon: <BsFillPersonCheckFill />,
      },
    ],
  },
  {
    links: [
      {
        name: "payments",
        icon: <LiaMoneyBillWaveSolid />,
      },
    ],
  },
  {
    links: [
      {
        name: "bulk",
        icon: <MdTextsms />,
      },
    ],
  },
  {
    links: [
      {
        name: "accounting",
        icon: <FaBalanceScale />,
      },
    ],
  },
  {
    links: [
      {
        name: "reports",
        icon: <AiFillFolderOpen />,
      },
    ],
  },
  {
    links: [
      {
        name: "team",
        icon: <MdGroupAdd />,
      },
    ],
  },
  {
    links: [
      {
        name: "plan",
        icon: <BsFillDatabaseFill />,
      },
    ],
  },
  {
    links: [
      {
        name: "settings",
        icon: <FiSettings />,
      },
    ],
  },
  {
    links: [
      {
        name: "logout",
        icon: <BiLogOut />,
      },
    ],
  },
];
