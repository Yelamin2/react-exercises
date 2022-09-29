import React from "react";
import {Nav, NavLink, NavMenu} from './MenuElements'

const Menu = () => {
    return (
    <>
        <Nav>
            <NavMenu>
                <NavLink to = "/BlogRead">
                    Blogs
                </NavLink>
                <NavLink to ="/FormBlog" >
                    Blog Form
                </NavLink>
                {/* <NavLink to = "/Person"  >
                    Person
                </NavLink> */}
                <NavLink to ="/Bookmark" >
                    Bookmark
                </NavLink>
                <NavLink to ="/Forum" >
                    Forum
                </NavLink>

            </NavMenu>
        </Nav>
            
    </>
    );
};

export default Menu;