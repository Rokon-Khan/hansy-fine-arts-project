import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open dropdown on hover
  const openDropdown = () => {
    setIsOpen(true);
  };

  // Close dropdown when mouse leaves
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <NavLink to="/shop-art">
      <div
        className={`dropdown ${isOpen ? "dropdown-open" : ""}`}
        onMouseEnter={openDropdown} // Open dropdown on hover
        onMouseLeave={closeDropdown} // Close dropdown on mouse leave
      >
        <div tabIndex={0} className="cursor-pointer font-semibold">
          SHOP ART
        </div>
        {isOpen && (
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link to="/contemporary" onClick={closeDropdown}>
                Contemporary
              </Link>
            </li>
            <li>
              <Link to="/abstract-designs" onClick={closeDropdown}>
                Abstract & Designs
              </Link>
            </li>
            <li>
              <Link to="/custom-portrait" onClick={closeDropdown}>
                Custom Portraits
              </Link>
            </li>
          </ul>
        )}
      </div>
    </NavLink>
  );
};

export default Dropdown;
