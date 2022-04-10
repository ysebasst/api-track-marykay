import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controller/user.controller";
import { Router } from "express";

const router = Router();

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
