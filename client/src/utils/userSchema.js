import zod from "zod";

const userSchema = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});

export { userSchema };
