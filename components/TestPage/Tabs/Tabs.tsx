import React, {ReactElement, useState} from "react";
import styles from './Tabs.module.css';
import TabTitle from "./TabTitle";


const Tabs = ({ children} : TabsProps) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <>
            <ul className={styles.tabsTitleWrap}>
                {children.map((item, index) => (
                    <TabTitle
                        key={index}
                        title={item.props.title}
                        index={index}
                        setSelectedTab={setSelectedTab}
                        selectedTab={selectedTab}
                    />
                ))}
            </ul>
           <div className={styles.tabContent}>{children[selectedTab]}</div>
        </>
    );
};

export default Tabs;

type TabsProps = {
    children: ReactElement[]
};