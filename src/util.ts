export const convertTime = (unixTime: any, offset: any) => {
  let dt = new Date((unixTime + offset) * 1000);
  let h = dt.getHours();
  let m = "0" + dt.getMinutes();
  let t = h + ":" + m.substr(-2);
  return t;

  //   return dt.toLocaleString();
};

export const renderLocaleTime = (dt: any) => {
  return new Date(dt * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const convertDay = (dt: any) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date(dt * 1000);
  return days[d.getDay()];
};
