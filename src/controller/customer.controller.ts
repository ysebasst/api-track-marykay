import Customer from "../models/customer.model";

export const getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};

export const createCustomer = async (req, res) => {
  const data = req.body;
  const newCustomer = await Customer.create(data);
  res.json(newCustomer);
};

export const getCustomer = async (req, res) => {
  const id = req.params.id;
  const customer = await Customer.findById(id);
  res.json(customer);
};

export const updateCustomer = async (req, res) => {
  const id = req.params.id;
  const updateCustomer = await Customer.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json(updateCustomer);
};

export const deleteCustomer = async (req, res) => {
  const id = req.params.id;
  const deleteCustomer = await Customer.findByIdAndDelete(id);
  res.json(deleteCustomer);
};
