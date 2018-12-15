declare namespace plus.networkinfo {
  const CONNECTION_NONE: number;
  const CONNECTION_ETHERNET: number;
  const CONNECTION_WIFI: number;
  const CONNECTION_CELL2G: number;
  const CONNECTION_CELL3G: number;
  const CONNECTION_CELL4G: number;

  function getCurrentType(): number;
}
