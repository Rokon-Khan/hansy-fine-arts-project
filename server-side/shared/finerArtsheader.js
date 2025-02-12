const getFineArtsHeaders = () => ({
  "Content-Type": "application/json",
  web_api_key: process.env.WEB_API_KEY || "",
  app_key: process.env.WEB_APP_KEY || "",
});

module.exports = getFineArtsHeaders;
