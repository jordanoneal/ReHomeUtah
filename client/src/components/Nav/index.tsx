import React from "react";

export default function DummyNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#!">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
          <li className="nav-item active">
            <a className="nav-link" href="#!">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';

// const Example = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <Navbar color="light" light expand="md">
//       <NavbarBrand href="#">Cole Tanner Real Estate</NavbarBrand>
//       <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="./pages/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                 </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                 </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>
//                   Reset
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//     </Navbar>
//   );

//   // Navbar.propTypes = {
//   //   light: PropTypes.bool,
//   //   dark: PropTypes.bool,
//   //   fixed: PropTypes.string,
//   //   color: PropTypes.string,
//   //   role: PropTypes.string,
//   //   expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   //   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   //   // pass in custom element to use
//   // }
// }

// export default Example;