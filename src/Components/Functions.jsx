import * as React from 'react'
import { makeStyles } from '@mui/styles'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@mui/material/MenuItem'
import ChevronRight from '@mui/icons-material/ChevronRight'
import Button from '@mui/material/Button'
import {
    usePopupState,
    bindHover,
    bindFocus,
    bindMenu,
} from 'material-ui-popup-state/hooks'
import { useNavigate } from 'react-router-dom'



const CascadingContext = React.createContext({
    parentPopupState: null,
    rootPopupState: null,
})

function CascadingMenuItem({ onClick, ...props }) {
    const { rootPopupState } = React.useContext(CascadingContext)
    if (!rootPopupState) throw new Error('must be used inside a CascadingMenu')
    const handleClick = React.useCallback(
        (event) => {
            rootPopupState.close(event)
            if (onClick) onClick(event)
        },
        [rootPopupState, onClick]
    )

    return <MenuItem {...props} onClick={handleClick} />
}


function CascadingMenu({ popupState, ...props }) {
    const { rootPopupState } = React.useContext(CascadingContext)
    const context = React.useMemo(
        () => ({
            rootPopupState: rootPopupState || popupState,
            parentPopupState: popupState,
        }),
        [rootPopupState, popupState]
    )

    return (
        <CascadingContext.Provider value={context}>
            <HoverMenu {...props} {...bindMenu(popupState)} />
        </CascadingContext.Provider>
    )
}
const Functions = (props) => {
    const navigate = useNavigate();
    const goHome = () => {
        console.log("clicked");
        navigate('/maps');
      };
  
      const goMaps = () => {
          console.log("Maps");
          navigate('/maps');
        };
    const popupState = usePopupState({
        popupId: 'demoMenu',
        variant: 'popover',
    });
    const { Topic, Content } = props.props;

    // Check if Content array exists and is not empty
    if (!Content || Content.length === 0) {
        return (
            <div style={{ height: 600 }}>
                <Button
                    variant="contained"
                    {...bindHover(popupState)}
                    {...bindFocus(popupState)}
                >
                    {Topic}
                </Button>
            </div>

        ) // or display an alternative message or component
    }

    return (
        <div style={{ height: 40 }}>
            <Button
                variant="contained"
                {...bindHover(popupState)}
                {...bindFocus(popupState)}
            >
                {Topic}
            </Button>
            <CascadingMenu
                popupState={popupState}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                {Content.map((item) => (
                    <CascadingMenuItem key={item} onClick={item === 'Start-wise' ? goMaps : null}>
                        {item}
                    </CascadingMenuItem>
                ))}
            </CascadingMenu>
        </div>
    );
};

export default Functions;
