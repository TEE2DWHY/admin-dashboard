export const handleChange = (e, setFormData, formData) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
