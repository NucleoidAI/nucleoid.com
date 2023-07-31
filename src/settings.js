import { storage } from "@nucleoidjs/webstorage";

const Settings = {
  projects: [],
  dialog: {},
  landing: (data) => {
    if (data !== undefined && data !== null) {
      storage.set("nucleoid.com", "landing", data);
    } else {
      return storage.get("nucleoid.com", "landing");
    }
  },
};

export default Settings;
