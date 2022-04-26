import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { UseMediaQuery } from './UseMediaQuery.jsx';

export default function call2Action() {

    // const midResSupport = UseMediaQuery('screen and (min-width: 576px) and (max-width: 991px)');
    const highResSupport = UseMediaQuery('screen and (min-width: 992px)');
    // const smallResSupport = UseMediaQuery('screen and (max-width: 575px)');


    const styleOptions = {
        height: "400px",
        width: "100%",
        paddingBlock: "5%",
        paddingInline: "12%",
        backgroundImage: highResSupport && `url("data:image/svg+xml,%3Csvg%0A%20%20%20%20%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%20%20%20%20%20%20viewBox%3D%220%200%20576%20512%22%0A%20%20%20%20%20%20%20%20fill%3D%22%23007226%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M560%20448H512V113.5c0-27.25-21.5-49.5-48-49.5L352%2064.01V128h96V512h112c8.875%200%2016-7.125%2016-15.1v-31.1C576%20455.1%20568.9%20448%20560%20448zM280.3%201.007l-192%2049.75C73.1%2054.51%2064%2067.76%2064%2082.88V448H16c-8.875%200-16%207.125-16%2015.1v31.1C0%20504.9%207.125%20512%2016%20512H320V33.13C320%2011.63%20300.5-4.243%20280.3%201.007zM232%20288c-13.25%200-24-14.37-24-31.1c0-17.62%2010.75-31.1%2024-31.1S256%20238.4%20256%20256C256%20273.6%20245.3%20288%20232%20288z%22%20%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
        backgroundPosition: "center right 50px",
        backgroundSize: "360px 360px",
        color: "#000",
        display: !highResSupport && "grid",
        flexDirection: !highResSupport && "column",
        placeItems: !highResSupport && "center",
        paddingBlock: !highResSupport? "6.5rem" : "2rem"
    }
        

    return (
        <div className="callToAction" style={styleOptions}>
            <h1 style={
                {
                    /* marginBottom: !highResSupport && "6.5rem" */
                }
            }>Feel here to talk to us!</h1>
            <div className="action-point" style={{position: "relative"}}>
                <Button variant="outline-dark" style={{
                    position: highResSupport? "absolute" : "unset",
                    top: "190px",
                    left: "20px",
                    
                }}>
                    <FontAwesomeIcon icon={faDoorOpen} />
                    {" "}Click here to go to the Backrooms
                </Button>
            </div>
        </div>
    )
}