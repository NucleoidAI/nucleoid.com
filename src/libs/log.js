const beta = localStorage.getItem("beta");

const log = (...args) => {
  if (beta === "true") {
    console.log(...args);
  }
};

export default log;
