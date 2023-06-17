import React from 'react';
import './navi.css'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
// import './styles.css';
import { useNavigate } from 'react-router-dom';


const Navi = () => {
    const navigate = useNavigate();
    const goMaps = () => {
        console.log("Maps");
        navigate('/maps');
      };

      const goBank = () => {
        console.log("Maps");
        navigate('/bank');
      };
    const goHome = () => {
        console.log("clicked");
        navigate('/home');
      };
      const goCharts = () => {
        console.log("clicked");
        navigate('/chart');
      };
    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" onClick = {goHome}>
                        Home 
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Chart <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List one">
                            <li style={{ gridRow: 'span 3' }}>
                                <NavigationMenu.Link asChild>
                                    <a className="Callout" >
                                        <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                                            <path d="M12 0H4V8H12V0Z"></path>
                                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                                        </svg>
                                        <div className="CalloutHeading">DATA VISUALIZATION</div>
                                        <p className="CalloutText"></p>
                                    </a>
                                </NavigationMenu.Link>
                            </li>

                            <ListItem title="State-wise" onClick={goMaps}>
                                Data Of Registration 
                            </ListItem>
                            <ListItem onClick = {goCharts} title="YEAR WISE">
                                YEAR WISE DATA
                            </ListItem>
                            <ListItem  title="TYPE WISE">
                                According to different types
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                
                
                {/* FIRST ONE */}
                
                
                
                
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Reg. Societies <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="Introduction" >
                                State-wise List
                            </ListItem>
                            <ListItem title="ALL Registration Societies" >
                                PDF
                            </ListItem>
                            <ListItem title="SOCIETIES REGISTERED " >
                                BEFORE 1986
                            </ListItem>
                            <ListItem title="CALENDAR YEAR-WISE LIST " >
                                
                            </ListItem>
                            <ListItem title="FINANCIAL YEAR_WISE LIST " >

                            </ListItem>

                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>


                {/* SECOND ONE */}

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        FORMS <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="FORM I" >
                                Build high-quality, accessible design systems and web apps.
                            </ListItem>
                            <ListItem title="FORM II" >
                                A quick tutorial to get you up and running with Radix Primitives.
                            </ListItem>
                            <ListItem title="FORM III" >
                                Unstyled and compatible with any styling solution.
                            </ListItem>
                            <ListItem title="FORM IV" >
                                Use CSS keyframes or any animation library of your choice.
                            </ListItem>
                            <ListItem title="FORM V" >
                                Tested in a range of browsers and assistive technologies.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>


                {/* THIRS ONE */}




                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        MSCS ACT <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="MSCS ACT" >
                                2002
                            </ListItem>
                            <ListItem title="MSCS RULES" >
                                2002
                            </ListItem>
                            <ListItem title="CHECK LIST" >

                            </ListItem>
                            <ListItem title="MODEL BYE-LAWS" >
                                
                            </ListItem>
                            <ListItem title="NATIONAL POLICY ON COOPERATIVE" >
                                2002
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                {/* FOURTH ONE */}


                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        APPLICATION & LIQUIDATION<CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List one">
                            <ListItem title="RECEIVED APPLICATION" >                               
                            </ListItem>
                            <ListItem title="STATUS OF APPLICATION" >

                            </ListItem>

                            <ListItem title="SOCITIES UNDER LIQUIDATION" >

                            </ListItem>

                            <ListItem title="LIQUIDATION PROCESS INITIATED" >

                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>





                {/* FIFTH ONE */}





                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        REPORTS <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="ALL REG. SOCITIES">
                                
                            </ListItem>
                            <ListItem title="ALL REGISTERED USER">
                            </ListItem>
                            <ListItem title="FILED ANNUAL RETURN ONLINE">
                            </ListItem>
                            <ListItem title="ANNUAL RETURN: OFFINE">
                                
                            </ListItem>
                            <ListItem title="REMINDER MESSAGE" >
                                
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>







                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" onClick={goBank} >
                        BANK
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                    <div className="Arrow" />
                </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
        </NavigationMenu.Root>
    );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <NavigationMenu.Link asChild>
            <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
                <div className="ListItemHeading">{title}</div>
                <p className="ListItemText">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
));

export default Navi;