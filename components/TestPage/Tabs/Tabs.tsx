import React, {ReactElement, useCallback, useState} from "react";
import styles from './Tabs.module.css';
import cn from 'classnames';

type tabProps = {
    title: string
};

export const Tab: React.FC<tabProps> = ({ children }) => {
    return <div>{children}</div>;
};

type tabTitleProps = {
    title: string
    index: number
    setSelectedTab: (index: number) => void
    selectedTab: number
};

const TabTitle: React.FC<tabTitleProps> = ({ title, setSelectedTab, index, selectedTab }) => {

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

/*
доработать раскидать по файлам
*/

type TabsProps = {
    children: ReactElement[]
};


const Tabs: React.FC<TabsProps>= ({ children} ) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div>
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
        </div>
    );
};

export default Tabs