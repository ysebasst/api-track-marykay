import { Request, Response } from "express";
import Customer from "../models/customer.model";

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find({
      user_id: "62526d8d731dc7e25bfb5c65",
    });
    res.json(customers);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newCustomer = await Customer.create({
      ...data,
      user_id: "62526d8d731dc7e25bfb5c65",
    });
    res.json(newCustomer);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const getCustomer = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findById(id);
    res.json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCustomer);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteCustomer = await Customer.findByIdAndDelete(id);
    res.json(deleteCustomer);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
