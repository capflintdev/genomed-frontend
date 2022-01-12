import {useRef, useState} from "react";
import useOnClickOutside from "../../../helpers/onClickOutside";
import Burger from "./Burger/Burger";
import styles from './MobileMenu.module.css';
import Menu from "./Menu/Menu";
import {oneCategory} from "../../../interfaces/page.interface";


const MobileMenu = ({data}: mobileMenuProps) => {

    const [open, setOpen] = useState<boolean>(false);
    const menu = useRef<HTMLDivElement>(null);
    useOnClickOutside(menu, () => setOpen(false));

    return (
        <div ref={menu}>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} data={data}/>
        </div>
    );
};

export default MobileMenu;

interface mobileMenuProps {
    data: oneCategory[];
}