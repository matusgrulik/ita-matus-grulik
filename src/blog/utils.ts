import { useState } from "react";
export const URL_BASE = "/Blogpost/";

export const urls = {
  URL_BASE: "/Blogpost/",
  URL_NEWPOST: URL_BASE + "NewPost",
  URL_ARTICLE: "Article/",
  URL_ONEPOST: (postSlug: string, postId: number) => {
    return URL_BASE + urls.URL_ARTICLE + postSlug + "-" + postId;
  },
};

/**
 * help: https://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
 */

export const convertToSlug = (Text: string) => {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

/**
 * inspiration from: https://usehooks.com/useLocalStorage/
 */

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {}
  };
  return [storedValue, setValue] as const;
};
