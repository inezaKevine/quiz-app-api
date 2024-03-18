const authDocs = {
  "/api/v1/users": {
    get: {
      tags: ["Users"],
      summary: "Get all users",
      description: "Get all registered users",
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
                  payload: [
                    {
                      _id: "string",
                      username: "string",
                      createdAt: "string",
                      updatedAt: "string",
                      __v: "number",
                    },
                  ],
                },
              },
              example: {
                statusCode: 200,
                message: "All users retrieved successfully",
                payload: [
                  {
                    _id: "65cb61aabddf373cd39db712",
                    username: "CYIMANA",
                    createdAt: "2024-02-13T12:33:46.166Z",
                    updatedAt: "2024-02-13T12:33:46.167Z",
                    __v: 0,
                  },
                  {
                    _id: "65cb97c4bf08c229af2c72f0",
                    username: "ISMAEL",
                    createdAt: "2024-02-13T16:24:36.003Z",
                    updatedAt: "2024-02-13T16:24:36.003Z",
                    __v: 0,
                  },
                ],
              },
            },
          },
        },
        401: {
          description: "Un Authorized",
        },
      },
    },
  },
};

export default authDocs;
