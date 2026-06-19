import 'dotenv/config';

export default {
  expo: {
    name: "Sport App",
    extra: {
      API_PROTO: process.env.API_PROTO,
    },
  },
};