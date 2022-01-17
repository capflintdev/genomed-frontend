import {useRef, useState} from "react";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import {oneCategory} from "../../../interfaces/page.interface";

const MobileMenu = ({data, showPopupCall}: mobileMenuProps) => {

    const [open, setOpen] = useState<boolean>(false);
    const menu = useRef<HTMLDivElement>(null);
    //useOnClickOutside(menu, () => setOpen(false));

    return (
        <>
            <Burger open={open} setOpen={setOpen} zIndex={10}/>
            <Menu open={open} data={data} showPopupCall={showPopupCall}/>
        </>
    );
};

export default MobileMenu;

interface mobileMenuProps {
    data: oneCategory[];
    showPopupCall: (popupCall: boolean) => void,
}