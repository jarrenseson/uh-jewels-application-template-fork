import AddShippingInfoForm from '@/components/AddShippingInfoForm';

const AddShippingInfo = async () => (
  // Protect the page, only logged in users can access it.
  <AddShippingInfoForm />
);

export default AddShippingInfo;
