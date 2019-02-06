const baseHost = 'http://localhost:34479/api/';

export const environment = {
  production: true,
  baseHost: `${baseHost}`,
  baseUrls: {
    accounts: `${baseHost}accounts`,
    orders: `${baseHost}orders`,
    openorders: `${baseHost}openorders`,
    products: `${baseHost}products`,
    carts: `${baseHost}carts`,
    auth: `${baseHost}auth`
  }
};
