import {useState, Dispatch, SetStateAction} from 'react';

// Generalized types for storing a value and its update function
export const useLocalStorage = <T>(
    key: string,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue: Dispatch<SetStateAction<T>> = (value) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};
