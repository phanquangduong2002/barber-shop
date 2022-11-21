import Hair_Styling from './image/hair-styling.png';
import Hair_Cut from './image/hair-cut.png';
import Hair_Color from './image/hair-color.png';
import Hair_Wash from './image/hair-wash.png';
import Face_Mask from './image/face-mask.png';
import Shave from './image/shave.png';
import Beard_Trim from './image/beard-trim.png';
import Moustache_Trim from './image/moustache-trim.png';

import Jaycut_Style from './image/jaycut-hairstyle.jpg';
import Dreadlock_Style from './image/dreadlock-hairstyle.jpg';
import Layer_Style from './image/layer-hairstyle.jpg';
import MiddlePart_Style from './image/middle-part-hairstyle.jpg';
import Mullet_Style from './image/mullet-hairstyle.jpg';
import SidePart_Style from './image/side-part-hairstyle.jpeg';
import Undercut_Style from './image/undercut-hairstyle.jpg';

import ProfileAvatar from './image/Profile-Avatar-PNG.png';
import { FaStar } from 'react-icons/fa';

export const MENU_HEADER = [
    {
        title: 'Home',
        href: '#',
        isActive: true,
    },
    {
        title: 'Services',
        href: '#services',
        isActive: false,
    },
    {
        title: 'About',
        href: '#about',
        isActive: false,
    },
    {
        title: 'Trending',
        href: '#trending',
        isActive: false,
    },
    {
        title: 'Prices',
        href: '#prices',
        isActive: false,
    },
    {
        title: 'Appointment',
        href: '#appointment',
        isActive: false,
    },
];

export const LIST_SERVICES = [
    {
        title: 'Hair Styling',
        image: Hair_Styling,
    },
    {
        title: 'Hair Cut',
        image: Hair_Cut,
    },
    {
        title: 'Hair Color',
        image: Hair_Color,
    },
    {
        title: 'Hair Wash',
        image: Hair_Wash,
    },
    {
        title: 'Face Mask',
        image: Face_Mask,
    },
    {
        title: 'Shave',
        image: Shave,
    },
    {
        title: 'Beard Trim',
        image: Beard_Trim,
    },
    {
        title: 'Moustache Trim',
        image: Moustache_Trim,
    },
];

export const LIST_TRENDING_HAIRSTYLE = [
    {
        title: 'Jaycut',
        image: Jaycut_Style,
    },
    {
        title: 'Dreadlock',
        image: Dreadlock_Style,
    },
    {
        title: 'Layer',
        image: Layer_Style,
    },
    {
        title: 'Middle Part',
        image: MiddlePart_Style,
    },
    {
        title: 'Mullet',
        image: Mullet_Style,
    },
    {
        title: 'Side Part',
        image: SidePart_Style,
    },
    {
        title: 'Undercut',
        image: Undercut_Style,
    },
];

export const LIST_PRICES = [
    {
        title: 'MEN’S HAIRCUT',
        price: '$15.00',
    },
    {
        title: 'TAPER HAIRCUT',
        price: '$18.00',
    },
    {
        title: 'HEAD LINEUP',
        price: '$5.00',
    },
    {
        title: 'HEAD SHAVE',
        price: '$25.00',
    },
    {
        title: 'BEARD LINEUP',
        price: '$15.00',
    },
    {
        title: 'CLEAN SHAVE',
        price: '$15.00',
    },
    {
        title: 'EYEBROW',
        price: '$7.00',
    },
    {
        title: 'HAIR COLOR',
        price: '$30.00 & up',
    },
    {
        title: 'HIGHLIGHT COLOR',
        price: '$35.00 & up',
    },
    {
        title: 'CUSTOM HAIRCUT',
        price: 'Call for price',
    },
    {
        title: 'MEN’S FACIAL',
        price: '$50.00 & up',
    },
    {
        title: 'BOWL FADE',
        price: '$25.00',
    },
    {
        title: 'MEN’S BLEACH',
        price: '$20.00',
    },
    {
        title: 'HAIR SHAMPOO',
        price: '$5.00',
    },
    {
        title: 'HAIR CURLING',
        price: 'Call for price',
    },
    {
        title: 'HEAD MASSAGE',
        price: '$20.00',
    },
];

export const TIME = [
    '07:00:00',
    '08:00:00',
    '09:00:00',
    '10:00:00',
    '11:00:00',
    '12:00:00',
    '13:00:00',
    '14:00:00',
    '15:00:00',
    '16:00:00',
    '17:00:00',
    '18:00:00',
];

export const LIST_FEEDBACK = [
    {
        image: ProfileAvatar,
        title: '038****033',
        feedback:
            "Good service attitude. The barber's skills are high. Reasonable price.",
    },
    {
        image: ProfileAvatar,
        title: '037****152',
        feedback:
            "Good service attitude. The barber's skills are high. Reasonable price.",
    },
    {
        image: ProfileAvatar,
        title: '036****242',
        feedback:
            "Good service attitude. The barber's skills are high. Reasonable price.",
    },
];
