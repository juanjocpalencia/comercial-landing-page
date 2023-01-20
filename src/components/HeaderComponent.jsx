import { Menu } from 'antd';
import { useState,useEffect } from 'react';
import MenuItems from '../helpers/MenuItems'


  const HeaderComponent=()=>{
    const [Items, setItems] = useState();
    const [current, setCurrent] = useState('AboutUs');
    useEffect(() => {
      setItems(MenuItems);
    }, [])
    

    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return (
      <div className='Header'>
        <Menu  onClick={onClick} selectedKeys={[current]} mode="horizontal" items={Items} />
      </div>
    );
  };

  export default HeaderComponent;