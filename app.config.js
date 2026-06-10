import 'dotenv/config';

export default {
  expo: {
    name: "my-app",
    slug: "my-app",
    extra: {
      API_PROTO: process.env.API_PROTO,
    },
  },
};