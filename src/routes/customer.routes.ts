import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} from "../controller/customer.controller";
import { Router } from "express";

const router = Router();

router.route("/customers").get(getCustomers).post(createCustomer);

router
  .route("/customers/:id")
  .get(getCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

export default router;
