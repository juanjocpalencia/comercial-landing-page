import { Card } from 'antd';
export default function AboutMe() {
    return (
        <>
        <div className='container-about-us' id="Aboutus">
            <Card
                className='about-us-card'
                title="About Us" bordered={false}>
                    
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit leo tincidunt ipsum tristique porta. Integer eget volutpat nisl. Praesent tempor ex at tellus mattis, sagittis vulputate nisi pharetra. Pellentesque ac accumsan mauris. Quisque convallis dolor eget purus cursus, eu iaculis leo bibendum. Pellentesque a erat elementum, luctus urna eget, vulputate arcu. Morbi ut augue et felis interdum blandit ac eget leo. Aenean in ultricies lectus, nec iaculis lorem. Praesent vestibulum sem dolor, et interdum ex molestie quis. Nunc ut maximus nisi. Pellentesque venenatis eros nibh, id imperdiet nibh vulputate a. Etiam et mauris magna.
                </p>
            </Card>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1a345c" fillOpacity="1" d="M0,96L80,101.3C160,107,320,117,480,106.7C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>        </>
        
    )
}
