import {AiFillHome} from "react-icons/ai"
import PersonIcon from '@mui/icons-material/Person';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import ManIcon from '@mui/icons-material/Man';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import DescriptionIcon from '@mui/icons-material/Description';
const NavRoute = [
  {
    link:"/",
    label:"Home",
    icons: <AiFillHome size={25}/>
  },
  {
    link: "/patient-list",
    label: "PatientList",
    icons: <PersonIcon size={25} />,
  },
  {
    link:"/doctors",
    label:"Doctors",
    icons:<ManIcon size={25}/>
  },
  {
    link:"/nurses",
    label:"Nurses",
    icons:<HealthAndSafetyIcon size={25}/>
  },
  {
    link: "/appointments",
    label: "Appointments",
    icons: <AddAlarmIcon size={25} />,
  },
  {
    link: "/bedallotments",
    label: "Bed Allotments",
    icons: <LocalHotelIcon size={25} />,
  },
  {
    link: "/medicalrecords",
    label: "Medicalrecords",
    icons: <DescriptionIcon size={25} />,
  },
];

export default NavRoute;