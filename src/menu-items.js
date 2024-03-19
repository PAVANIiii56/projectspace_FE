// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ComputerIcon from '@mui/icons-material/Computer';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import TungstenIcon from '@mui/icons-material/Tungsten';
import MemoryIcon from '@mui/icons-material/Memory';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  PrecisionManufacturingIcon: PrecisionManufacturingIcon,
  ComputerIcon: ComputerIcon,
  AgricultureIcon: AgricultureIcon,
  TungstenIcon: TungstenIcon,
  MemoryIcon: MemoryIcon,
  LocationCityIcon: LocationCityIcon,

};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      // title: 'Materially',
      // caption: 'Dashboard',
      type: 'group',
      // icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/sample-page'
        }
      ]
    },
    {
      id: 'pages',
      title: 'BRANCHES',
      type: 'group',
      icon: icons['TungstenIcon'],
      children: [
        {
          id: 'ece',
          title: 'ECE',
          type: 'collapse',
          icon: icons['TungstenIcon'],
          children: [
            // {
            //   id: 'login-1',
            //   title: 'Login',
            //   type: 'item',
            //   url: '/application/login',
            //   target: true
            // },
            {
              id: 'lica',
              title: 'LICA',
              type: 'item',
              url: '/utils/util-typography/lica',
              icon: icons['FormatColorTextOutlinedIcon'],
              target: true
            },
            {
              id: 'eca',
              title: 'ECA',
              type: 'item',
              url: '/utils/util-typography/eca',
              icon: icons['FormatColorTextOutlinedIcon'],
              target: true
            },
            
            {
              id: 'ac',
              title: 'AC and DC',
              type: 'item',
              url: '/utils/util-typography',
              icon: icons['FormatColorTextOutlinedIcon'],
              target: true
            },
            // {
            //   id: 'register',
            //   title: 'Register',
            //   type: 'item',
            //   url: '/application/register',
            //   target: true
            // }
          ]
        }, 
        {
          id: 'cse',
          title: 'CSE',
          type: 'collapse',
          icon: icons['ComputerIcon'],
          children: [
            // {
            //   id: 'login-1',
            //   title: 'Login',
            //   type: 'item',
            //   url: '/application/login',
            //   target: true
            // },
          ]
        },
        {
          id: 'civil',
          title: 'CIVIL',
          type: 'collapse',
          icon: icons['LocationCityIcon'],
          children: [
            // {
            //   id: 'login-1',
            //   title: 'Login',
            //   type: 'item',
            //   url: '/application/login',
            //   target: true
            // },
          ]
        },
        {
          id: 'mech',
          title: 'MECH',
          type: 'collapse',
          icon: icons['PrecisionManufacturingIcon'],
          children: [
            // {
            //   id: 'login-1',
            //   title: 'Login',
            //   type: 'item',
            //   url: '/application/login',
            //   target: true
            // },
          ]
        },
        {
          id: 'eee',
          title: 'EEE',
          type: 'collapse',
          icon: icons['MemoryIcon'],
          children: [
            // {
            //   id: 'login-1',
            //   title: 'Login',
            //   type: 'item',
            //   url: '/application/login',
            //   target: true
            // },
          ]
        },
        {
          id: 'agri',
          title: 'AGRI',
          type: 'collapse',
          icon: icons['AgricultureIcon'],
          children: [
            // {
            //   id: 'login-1',
            //   title: 'Login',
            //   type: 'item',
            //   url: '/application/login',
            //   target: true
            // },
          ]
        }
      ]
    },
      // {
      //   id: 'sample',
      //   title: 'Materially',
      //   type: 'group',
      //   icon: icons['NavigationOutlinedIcon'],
      //   children: [
      //     {
      //         id: 'sample-page',
      //         title: 'Sample Page',
      //         type: 'item',
      //         url: '/sample-page',
      //         icon: icons['ChromeReaderModeOutlinedIcon']
      //       }
      //   ]
      // },
      {
        id: 'contact',
        title: 'Contact',
        type: 'group',
        icon: icons['NavigationOutlinedIcon'],
        children: [
          {
              id: 'contact-pages',
              title: 'Contact-Us',
              type: 'item',
              url: '/dashboard/contact-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            }
        ]
      },
      {
        id: 'supports',
        title: 'Support',
        type: 'group',
        icon: icons['NavigationOutlinedIcon'],
        children: [
          {
              id: 'support-page',
              title: 'Help',
              type: 'item',
              url: '/sample-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            }
        ]
      },
      {
        id: 'review',
        title: 'Review',
        type: 'group',
        icon: icons['NavigationOutlinedIcon'],
        children: [
          {
              id: 'review-page',
              title: 'Feed Back',
              type: 'item',
              url: '/sample-page',
              icon: icons['ChromeReaderModeOutlinedIcon']
            }
        ]
      },
    // {
    //   id: 'utils',
    //   title: 'Utils',
    //   type: 'group',
    //   icon: icons['AccountTreeOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'util-icons',
    //       title: 'Icons',
    //       type: 'item',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       icon: icons['AppsOutlinedIcon'],
    //       external: true,
    //       target: true
    //     },
    //     {
    //       id: 'util-typography',
    //       title: 'Typography',
    //       type: 'item',
    //       url: '/dashboard/utils/util-typography',
    //       icon: icons['FormatColorTextOutlinedIcon']
    //     }
    //   ]
    // },
    // {
    //   id: 'support',
    //   title: 'Support',
    //   type: 'group',
    //   icon: icons['ContactSupportOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'disabled-menu',
    //       title: 'Disabled Menu',
    //       type: 'item',
    //       url: '#',
    //       icon: icons['BlockOutlinedIcon'],
    //       disabled: true
    //     },
    //     {
    //       id: 'documentation',
    //       title: 'Documentation',
    //       type: 'item',
    //       url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
    //       icon: icons['HelpOutlineOutlinedIcon'],
    //       chip: {
    //         label: 'Help?',
    //         color: 'primary'
    //       },
    //       external: true,
    //       target: true
    //     }
    //   ]
    // }
  ]
};