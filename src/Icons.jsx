import { FiPhone, FiMapPin, FiClock, FiShield, FiCheck, FiMenu, FiX, FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { FaWhatsapp, FaStar, FaLeaf, FaBalanceScale } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';

export const IconPhone    = (p) => <FiPhone      {...p} />;
export const IconWhatsapp = (p) => <FaWhatsapp   {...p} />;
export const IconMapPin   = (p) => <FiMapPin     {...p} />;
export const IconClock    = (p) => <FiClock      {...p} />;
export const IconLeaf     = (p) => <FaLeaf       {...p} />;
export const IconShield   = (p) => <FiShield     {...p} />;
export const IconCheck    = (p) => <FiCheck      {...p} />;
export const IconScale    = (p) => <FaBalanceScale {...p} />;
export const IconWheat    = (p) => <GiWheat      {...p} />;
export const IconMenu     = (p) => <FiMenu       {...p} />;
export const IconX        = (p) => <FiX          {...p} />;
export const IconArrow    = (p) => <FiArrowRight {...p} />;
export const IconBag      = (p) => <FiShoppingBag {...p} />;

export const IconStar = ({ size = 14, color = "#F59E0B", ...rest }) =>
  <FaStar size={size} color={color} {...rest} />;

/* Custom stone-chakki glyph — no react-icons equivalent */
export const IconChakki = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="3"/>
    <line x1="12" y1="3"  x2="12" y2="9"/>
    <line x1="12" y1="15" x2="12" y2="21"/>
    <line x1="3"  y1="12" x2="9"  y2="12"/>
    <line x1="15" y1="12" x2="21" y2="12"/>
    <line x1="5.636"  y1="5.636"  x2="9.172"  y2="9.172"/>
    <line x1="14.828" y1="14.828" x2="18.364" y2="18.364"/>
    <line x1="18.364" y1="5.636"  x2="14.828" y2="9.172"/>
    <line x1="9.172"  y1="14.828" x2="5.636"  y2="18.364"/>
  </svg>
);
