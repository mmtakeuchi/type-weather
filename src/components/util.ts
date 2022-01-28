export const convertTime = (unixTime: number, offset: number) => {
  let dt = new Date((unixTime + offset) * 1000);
  let h = dt.getHours();
  let m = "0" + dt.getMinutes();
  let t = h + ":" + m.substr(-2);
  return t;

  //   return dt.toLocaleString();
};
