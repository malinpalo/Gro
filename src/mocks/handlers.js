import { rest } from "msw";

const baseURL = "https://gro-drf.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 10,
        "username": "Åke",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 9,
        "profile_image": "https://res.cloudinary.com/dz0w8vqzx/image/upload/v1/media/../gro_default_profile_p4nzko"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];