import { useRef } from 'react';
import Wave from 'react-wavify';
import './comp_css/testimonial.css';

export default function Testimonials() {
    const unmounted = useRef(false);
    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === 'visible') {
            unmounted.current = false;
        } else {
            unmounted.current = true;
        }
      });
    
    return (
        <div className="wave-container" >
            <h3>Hundreds of satisfied customers!</h3>
            <div className="grid-container">
                <div className='stats'>
                    <h4>Some heading</h4>
                    <p>Some Big numbers</p>
                </div>
                <div className='stats'>
                    <h4>Some heading</h4>
                    <p>Some Big numbers</p>
                </div>
                <div className='stats'>
                    <h4>Some heading</h4>
                    <p>Some Big numbers</p>
                </div>
                <div className='stats'>
                    <h4>Some heading</h4>
                    <p>Some Big numbers</p>
                </div>
            </div>
            <Wave fill='#f78100' style={{position: "absolute", bottom: "0", display: "block", opacity: "50%", zIndex:"1"}}
                paused={unmounted.current}
                options={{
                    height: 60,
                    amplitude: 50,
                    speed: 0.25,
                    points: 4
                }}
            />
        </div>
    )
}