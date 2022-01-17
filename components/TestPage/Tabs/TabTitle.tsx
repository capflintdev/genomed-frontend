import React, {useCallback} from "react";
import cn from "classnames";
import styles from "./Tabs.module.css";

const TabTitle = ({ title, setSelectedTab, index, selectedTab }: tabTitleProps) => {

    const onClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    return (
        <li className={cn(styles.tabTitle, {
            [styles.tabTitleActive]: index == selectedTab
        })}>
            <span onClick={onClick}>{title}</span>
        </li>
    );
};

export default TabTitle;

type tabTitleProps = {
    title: string
    index: number
    setSelectedTab: (index: number) => void
    selectedTab: number
};