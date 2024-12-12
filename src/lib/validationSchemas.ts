import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const AddJewelsSchema = Yup.object({
  name: Yup.string().required(),
  price: Yup.number().positive().required(),
  image: Yup.string().required(),
  description: Yup.string().required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const AddShippingInfoSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address1: Yup.string().required(),
  address2: Yup.string().required(),
  city: Yup.string().required(),
  zip: Yup.string().required(),
  state: Yup.string().required(),
  country: Yup.string().required(),
});

export const AddToCartSchema = Yup.object({
  userEmail: Yup.string().required(),
});

export interface Jewels {
  name: string;
  price: number;
  image: string;
  description: string;
}
