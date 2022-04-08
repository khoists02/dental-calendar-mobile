import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageSetItem = (key: string, value: any) => {
  const val = typeof value === "string" ? value : JSON.parse(value);
  AsyncStorage.setItem(key, val);
};

export const storageDeleteItem = (key: string) => {
  AsyncStorage.removeItem(key);
};

export const storageGetItem: any = async (key: string) => {
  const value = await AsyncStorage.getItem(key);

  if (
    /^[\],:{}\s]*$/.test(
      value
        .replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          "]"
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    )
  ) {
    return JSON.stringify(value);
  } else {
    return value;
  }
};
