import { useEffect, useRef, useState } from "react";

//1st implementation
function UseDebounce(originalFn) {
    const currentClock = useRef();

    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalFn, 200);
    }
    return fn;
}

export default UseDebounce;

//2nd implementation

export function UseDebounce2(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}