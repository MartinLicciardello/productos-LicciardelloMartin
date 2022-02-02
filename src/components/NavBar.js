import React from 'react';
import { Navbar,NavbarBrand,NavbarToggler, Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
  
                <div>

                    <div>
                        <Navbar
                        color="light"
                        expand="md"
                        light
                    >
                        <NavbarBrand href="/">
                        CASA VENECIA
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck(){}} />
                        <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                            <NavLink href="/components/">
                                Inicio
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Quienes Somos?
                            </NavLink>
                            </NavItem>
                            <UncontrolledDropdown
                            inNavbar
                            nav
                            >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Productos
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Ceramicas
                                </DropdownItem>
                                <DropdownItem>
                                Puertas
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Ventanas
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                            <NavLink href="/components/">
                                <CartWidget/>
                            </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>);
};
