'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  groupName?: string,
): [T, (value: T) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        if (groupName) {
          // If groupName is provided, check if the stored value is an object with this group
          const parsed = JSON.parse(item);
          return parsed[groupName] !== undefined ? parsed[groupName] : initialValue;
        }
        return JSON.parse(item);
      }
      return initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        if (groupName) {
          // Get the current stored object or create a new one
          const currentStored = window.localStorage.getItem(key);
          const groupObject = currentStored ? JSON.parse(currentStored) : {};

          // Update the specific group
          groupObject[groupName] = valueToStore;

          // Save the entire object back to localStorage
          window.localStorage.setItem(key, JSON.stringify(groupObject));
        } else {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeValue = () => {
    try {
      if (typeof window !== 'undefined') {
        if (groupName) {
          // Remove just the group from the stored object
          const currentStored = window.localStorage.getItem(key);
          if (currentStored) {
            const groupObject = JSON.parse(currentStored);
            delete groupObject[groupName];

            // If the object is now empty, remove the key entirely
            if (Object.keys(groupObject).length === 0) {
              window.localStorage.removeItem(key);
            } else {
              window.localStorage.setItem(key, JSON.stringify(groupObject));
            }
          }
        } else {
          window.localStorage.removeItem(key);
        }
      }

      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          const newValue = JSON.parse(e.newValue);
          if (groupName) {
            setStoredValue(newValue[groupName] !== undefined ? newValue[groupName] : initialValue);
          } else {
            setStoredValue(newValue);
          }
        } catch (error) {
          console.error(`Error parsing new value for key "${key}":`, error);
        }
      } else if (e.key === key && e.newValue === null) {
        setStoredValue(initialValue);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
    return undefined;
  }, [initialValue, key, groupName]);

  return [storedValue, setValue, removeValue];
}
