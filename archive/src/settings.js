import { storage } from "@nucleoidjs/webstorage";

const Settings = {
  projects: [],
  dialog: {},
  landing: (data) => {
    if (data !== undefined && data !== null) {
      storage.set("nucleoidcom", "landing", data);
    } else {
      return storage.get("nucleoidcom", "landing");
    }
  },
};

export default Settings;
