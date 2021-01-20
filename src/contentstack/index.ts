import contentstack from "contentstack";

const config: contentstack.Config = {
  api_key: "blt5fb46dfbc59c25f3",
  delivery_token: "cs5393e87306d4835587b441d0",
  environment: "publish",
  region: contentstack.Region.EU,
};

export const Stack = contentstack.Stack(config);
