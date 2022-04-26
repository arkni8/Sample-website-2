import { faFilm, faGamepad, faPlay, faPodcast, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback} from 'react';
import './comp_css/pricing2.css'

function Pricing() {
    let startX;
    let posCurrent;

    const youtube = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
    
    const icon = [faVideo, faPlay, faFilm, youtube, faPodcast, faGamepad];

    const iconEle = [];

    for (let k = 0; k < 3; k++){
        for (let j = 0; j < icon.length; j++){
            j !== 3 ? iconEle.push(<FontAwesomeIcon key={k===0? j : k===1? j+6 : j+12} icon={icon[j]} />) : iconEle.push(icon[j]);
        }
    }

    // 1050, 1225, 1400, 1575, 1750, 1925
    // 0, 175, 350, 525, 700, 875
    // 2100, 2275, 2450, 2625, 2800, 2975
    const mousemovement = useCallback(event => {
        const slider = document.querySelector('.sweeper');
        const x = event.pageX;
        const y = event.pageY;
        const walk = (x - startX + posCurrent);
        slider.style.transform = `translateX(${walk}px)`;
        const newPos = parseInt(slider.style.transform.substr(11).split(')')[0], 10);

        if (newPos >= 0) {
            slider.removeEventListener('mousemove', mousemovement);
            slider.classList.remove('transition-base');
            slider.style.transform = `translateX(-1050px)`;
            simulate(slider, "mousedown", { pointerX: x, pointerY: y });
        }
        if (newPos < -2275) {
            slider.removeEventListener('mousemove', mousemovement);
            slider.classList.remove('transition-base');
            slider.style.transform = `translateX(-1225px)`;
            simulate(slider, "mousedown", { pointerX: x, pointerY: y });
        }
    });

    function simulate(element, eventName)
    {
        // console.log(defaultOptions.pointerX +", "+ defaultOptions.pointerY);

        var options = extend(defaultOptions, arguments[2] || {});
        var oEvent, eventType = null;

        for (var name in eventMatchers)
        {
            if (eventMatchers[name].test(eventName)) { eventType = name; break; }
        }

        if (!eventType)
            throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

        if (document.createEvent)
        {
            oEvent = document.createEvent(eventType);
            if (eventType == 'HTMLEvents')
            {
                oEvent.initEvent(eventName, options.bubbles, options.cancelable);
            }
            else
            {
                oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
                options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
                options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
            }
            element.dispatchEvent(oEvent);
        }
        else
        {
            options.clientX = options.pointerX;
            options.clientY = options.pointerY;
            var evt = document.createEventObject();
            oEvent = extend(evt, options);
            element.fireEvent('on' + eventName, oEvent);
        }
        return element;
    }

    function extend(destination, source) {
        for (var property in source)
        destination[property] = source[property];
        return destination;
    }

    var eventMatchers = {
        'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
        'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
    }
    var defaultOptions = {
        pointerX: 0,
        pointerY: 0,
        button: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true,
        cancelable: true
    }
    

    function scrollSidewayEnter(event) {
        const slider = document.querySelector('.sweeper');
        posCurrent = parseInt(slider.style.transform.substr(11).split(')')[0], 10);
        startX = event.pageX;
        slider.classList.remove('transition-base');
        document.querySelector('.side-scroll2').addEventListener('mousemove', mousemovement);
    }

    function scrollSidewayExit(_event) {
        document.querySelector('.side-scroll2').removeEventListener('mousemove', mousemovement);
        const slider = document.querySelector('.sweeper');

        posCurrent = parseInt(slider.style.transform.substr(11).split(')')[0], 10);


        let j;
        if (Math.abs(posCurrent % 175) >= 65) {
            j = (Math.floor(parseInt(posCurrent / 175)) - 1);
        } else {
            j = Math.floor(parseInt(posCurrent / 175));
        }
        slider.classList.add('transition-base');
        slider.style.transform = `translateX(${j * 175}px)`;

    }

    function checkPositionAndAnimate(j) {
        const slider = document.querySelector('.sweeper');
        if (j > 7) {
            slider.classList.remove('transition-base');
            slider.style.transform = `translateX(${(j - 6) * -175}px)`;
            slider.style.setProperty('--start-animating', `${Math.abs(j - 6)}`);
        } else {
            slider.classList.remove('transition-base');
            slider.style.transform = `translateX(${j * -175}px)`;
            slider.style.setProperty('--start-animating', `${Math.abs(j)}`);
        }
        slider.classList.add('animate');
    }

    // 0, 1, 2, 3, 4, 5,|| 6, 7, 8, 9, 10, 11,|| 12, 13, 14, 15, 16, 17
    function scrollSidewayOut() {
        document.querySelector('.side-scroll2').removeEventListener('mousemove', mousemovement);
        const slider = document.querySelector('.sweeper');
        let stopValue = parseInt(slider.style.transform.substr(11).split(')')[0], 10);

        let j;
        if (Math.abs(stopValue % 175) >= 65) {
            j = (Math.floor(parseInt(stopValue / 175)) - 1);
        } else {
            j = Math.floor(parseInt(stopValue / 175));
        }

        slider.classList.add('transition-base');
        slider.style.transform = `translateX(${j * 175}px)`;

        setTimeout(() => checkPositionAndAnimate(Math.abs(j)), 300);
        
    }

    function animateStop() {
        const slider = document.querySelector('.sweeper');
        slider.style.transform = `translateX(${window.getComputedStyle(slider).transform.split(',')[4]}px)`;

        slider.classList.remove('animate');
    }
    
    return (
        <div className="pricing2">
            <h2>Enjoy the wide vareity of services with us!</h2>
            <div className="side-scroll2" onMouseDown={scrollSidewayEnter}
                onMouseUp={scrollSidewayExit}
                onMouseLeave={scrollSidewayOut}
                onMouseEnter={animateStop}
                // onWheel={wheelMove}
                data-index="0"
                data-max-children-visible="5"
            >
                {
                    <div className="sweeper transition-base animate" style={{transform: "translateX(-1050px)"}}>
                        {iconEle}
                    </div>  
                }
            </div>
        </div>
    );
}

export default Pricing;