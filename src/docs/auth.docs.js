const authDocs = {
  "/api/v1/auth": {
    post: {
      tags: ["Authentication"],
      summary: "Authenticate user",
      description: "Authenticate user using username and password",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  example: "user123",
                },
                password: {
                  type: "string",
                  example: "password123",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Created",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  statusCode: "number",
                  message: "string",
                  payload: {
                    token: "string",
                    firsTimeUser: "boolean",
                  },
                },
              },
              example: {
                statusCode: 201,
                message: "Login successful",
                payload: {
                  token:
                    "eyJhbGciOiJIUzI1NkgiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2IzODNiZjM1NGZjZmRkN2MwOWNkNyIsImlhdCI6MTcwNzgyMDk3OCwiZXhwIjoxNzA3ODM4OTc4fQ.sKTZKQNfxPxJpTQb-ct591Q0TUD11AKtnc0ZSo4jVzg",
                  firsTimeUser: false,
                },
              },
            },
          },
        },
        400: {
          description: "Bad Request",
        },
        500: {
          description: "Internal Server Error",
        },
      },
    },
    get: {
      tags: ["Authentication"],
      summary: "Check username exists",
      description: "Check if the username exists in the database",
      parameters: [
        {
          name: "username",
          in: "query",
          required: true,
          schema: {
            type: "string",
            example: "user123",
          },
        },
      ],
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  statusCode: "number",
                  message: "string",
                  payload: "boolean",
                },
              },
              example: {
                statusCode: 200,
                message: "User status retrieved successfully",
                payload: true,
              },
            },
          },
        },
        400: {
          description: "Bad Request",
        },
        500: {
          description: "Internal Server Error",
        },
      },
    },
  },
};

export default authDocs;
