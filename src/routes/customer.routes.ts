import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} from "../controller/customer.controller";
import { Router } from "express";

const router = Router();

router.route("/").get(getCustomers).post(createCustomer);

router
  .route("/:id")
  .get(getCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

export default router;
