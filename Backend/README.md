# User Registration Endpoint Documentation

## POST `/users/register`

### Description

Registers a new user in the system. This endpoint creates a user account with the provided details and returns an authentication token upon successful registration.

---

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required, min 5 chars)",
  "password": "string (min 6 chars, required)"
}
```

### Example Response

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "64f1b2c3d4e5f6789012abcd",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
    }
}
```
#### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

---

### Responses

- **201 Created**
  - **Description:** User registered successfully.
  - **Body:**
    ```json
    {
      "token": "jwt_token_string",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```

- **400 Bad Request**
  - **Description:** Validation failed (missing or invalid fields).
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "First name should contain at least three characters",
          "param": "fullname.firstname",
          "location": "body"
        }
        // ...other errors
      ]
    }
    ```

---

### Notes

- `firstname`, `email`, and `password` are required fields.
- `lastname` is optional but must be at least 3 characters if provided.
- The password is securely hashed before storage.
- On success, a JWT token is returned for
