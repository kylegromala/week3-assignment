import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Rentals</SidebarLink>
                <SidebarLink to="/">Cart</SidebarLink>
                <SidebarLink to="/">Return</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Purchase Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
};

export default Sidebar;