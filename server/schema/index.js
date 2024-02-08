import zod from "zod";

const userSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
  email: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  gender : zod.string()
});

const loginSchema = zod.object({
  username : zod.string(),
  email : zod.string().email(),
  password : zod.string().min(6)
})

export { userSchema, loginSchema };