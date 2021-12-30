import React from "react";

const TabContent: React.FC<tabProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default TabContent;

type tabProps = {
    title: string
};
