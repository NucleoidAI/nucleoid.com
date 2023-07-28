import { storage } from "@nucleoidjs/webstorage";

const Settings = {
  projects: [],
  dialog: {},
  landing: (status) => {
    if (status !== undefined && status !== null) {
      storage.set("nucleoid", "landing", status);
    } else {
      return storage.get("nucleoid", "landing") === true;
    }
  },
};

export default Settings;
