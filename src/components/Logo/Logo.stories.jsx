import Logo from "./Logo.jsx";
import { MemoryRouter } from "react-router";

export default {
  title: "Nucleoid/Logo",
  component: Logo,
  decorators: 
    [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
    ,
};


export const Normal = {
  args: {
    title: "nucleoid",
    large: true, 
  },
};


