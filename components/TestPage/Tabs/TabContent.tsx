import React from "react";

const TabContent: React.FC<tabProps> = ({ children }) => {
    return <>{children}</>;
};

export default TabContent;

type tabProps = {
    title: string
};
