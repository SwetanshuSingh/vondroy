import zod from "zod";

const userSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
  email: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  gender : zod.string()
});


export default userSchema;