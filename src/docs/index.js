import authRoutesDocs from "./auth.docs";
import usersRoutesDocs from "./users.docs";

const options = {
  openapi: "3.1.0",

  info: {
    title: "RW2 API",
    version: "0.1.0",
    description: "This is the API specifications for the RW2 application.",
    license: {
      name: "MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "RW2 Team",
      url: "https://rw2.com",
      email: "rw2@andrew.cmu.edu",
    },
  },

  schemes: ["HTTP", "HTTPS"],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },

  apis: ["./routes/*.js"],

  tags: [
    {
      name: "Authentication",
      description: "Authentication routes",
    },
    {
      name: "Users",
      description: "Users routes",
    },
  ],

  paths: {
    ...authRoutesDocs,
    ...usersRoutesDocs,
  },
};

export default options;
