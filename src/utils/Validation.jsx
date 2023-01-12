export const validate = (value) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexPhone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  if (!value.name) {
    errors.name = "El nombre es requerido";
  }
  if (!value.lastname) {
    errors.lastname = "El apellido paterno es requerido";
  }
  if (!value.motherLastname) {
    errors.motherLastname = "El apellido materno es requerido";
  }
  if (!value.gender) {
    errors.gender = "El genero es requerido";
  }
  if (!value.phone) {
    errors.phone = "El teléfono es requerido";
  } else if (!regexPhone.test(value.phone)) {
    errors.phone = "Este no es un formato de teléfono valido";
  }
  if (!value.email) {
    errors.email = "El email es requerido";
  } else if (!regex.test(value.email)) {
    errors.email = "Este no es un formato de correo valido";
  }

  return errors;
};
