import { UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import logo from '../../public/Img/503755dec9a1d1f7a725d2c4fe311de9_590x590.jpeg' 

const MenuItems =()=> {
    
    return[
        {
            label: (
                <a href="/" rel="noopener noreferrer">
                    <img className='logo' src={logo} alt="" />
                </a>
            ),
            key: 'Home',
        },
    {
        label: (
            <a href="/#Aboutus" rel="noopener noreferrer">
                About Us
            </a>
        ),
        key: 'AboutUs',
        icon:<UserOutlined />,
    },
    {
        label: (
            <a href="/#services" rel="noopener noreferrer">
                Our Services
            </a>
        ),
        key: 'Servicios',
        icon: <SettingOutlined />,
    },
    {
        label: (
            <a href="/#contactus" rel="noopener noreferrer">
                Contact Us
            </a>
        ),
        key: 'ContactUs',
        icon:<MailOutlined />
    },
]};

export default  MenuItems;