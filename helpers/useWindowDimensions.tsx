import { useEffect, useState } from 'react';

type WindowDimentions = {
    width: number | undefined;
};

const useWindowDimensions = (): WindowDimentions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
        width: undefined,
    });
    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimensions;
