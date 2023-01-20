import { UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import logo from '../../public/Img/Logo.webp' 

const MenuItems =()=> {
    
    return[
        {
            label: (
                <a href="./" rel="noopener noreferrer">
                    <img className='logo' src={logo} alt="" />
                </a>
            ),
            key: 'Home',
        },
    {
        label: (
            <a href="./#Aboutus" rel="noopener noreferrer">
                About Us
            </a>
        ),
        key: 'AboutUs',
        icon:<UserOutlined />,
    },
    {
        label: (
            <a href="./#services" rel="noopener noreferrer">
                Our Services
            </a>
        ),
        key: 'Servicios',
        icon: <SettingOutlined />,
    },
    {
        label: (
            <a href="./#contactus" rel="noopener noreferrer">
                Contact Us
            </a>
        ),
        key: 'ContactUs',
        icon:<MailOutlined />
    },
]};

export default  MenuItems;