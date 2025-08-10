"use client";

import { useState, useCallback } from "react";

export interface DataManagerOptions<T> {
  initialData?: T[];
  generateId?: () => string;
}

export function useDataTable<T extends { id: string }>(
  options: DataManagerOptions<T> = {}
) {
  const { initialData = [], generateId = () => Date.now().toString() } =
    options;

  const [data, setData] = useState<T[]>(initialData);

  const addItem = useCallback(
    (newItem: Omit<T, "id">) => {
      const item = { ...newItem, id: generateId() } as T;
      setData((prev) => [...prev, item]);
      return item;
    },
    [generateId]
  );

  const updateItem = useCallback((updatedItem: T) => {
    setData((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    return updatedItem;
  }, []);

  const deleteItem = useCallback((id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const getItem = useCallback(
    (id: string) => {
      return data.find((item) => item.id === id);
    },
    [data]
  );

  const saveItem = useCallback(
    (item: T, isNew: boolean) => {
      if (isNew) {
        return addItem(item as Omit<T, "id">);
      } else {
        return updateItem(item);
      }
    },
    [addItem, updateItem]
  );

  return {
    data,
    setData,
    addItem,
    updateItem,
    deleteItem,
    getItem,
    saveItem,
  };
}
