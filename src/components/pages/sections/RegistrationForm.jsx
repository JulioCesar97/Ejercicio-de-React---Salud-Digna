import React, { useState } from "react";
import Finance from "../../images/finance.png";
import Toast from "../../layout/toast/Toast";
import { validate } from "../../../utils/Validation";

function REgistrationForm() {
  const initialState = {
    name: "",
    lastname: "",
    motherLastname: "",
    gender: "",
    phone: "",
    email: "",
  };
  const [error, setError] = useState({});
  const [register, setRegister] = useState(initialState);
  const { name, lastname, motherLastname, gender, phone, email } = register;
  const [notification, setNotification] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(validate(register));

    setNotification(true);
    setRegister(initialState);
  };

  return (
    <div className="container mx-auto flex items-center mt-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="px-10">
          <h2 className="font-bold text-3xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Ut congue, lacus eu eleifend varius,
          </h2>

          <form className="mb-4" onSubmit={handleSubmit}>
            {notification && (
              <Toast
                Object={Object}
                error={error}
                notification={notification}
                setNotification={setNotification}
              />
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre completo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleChangeInput}
                placeholder="nombre completo"
              />

              {error.name && (
                <p className="text-red text-xs italic">{error.name}</p>
              )}
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastname"
                >
                  Apellido paterno
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  name="lastname"
                  type="text"
                  value={lastname}
                  onChange={handleChangeInput}
                  placeholder="apellido paterno"
                />
                {error.lastname && (
                  <p className="text-red text-xs italic">{error.lastname}</p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="motherLastname"
                >
                  Apellido materno
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="motherLastname"
                  name="motherLastname"
                  type="text"
                  value={motherLastname}
                  onChange={handleChangeInput}
                  placeholder="apellido materno"
                />
                {error.motherLastname && (
                  <p className="text-red text-xs italic">
                    {error.motherLastname}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  Genero
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="shadow appearance-none border rounded w-full py-3 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={gender}
                  onChange={handleChangeInput}
                >
                  <option value="">genero</option>
                  <option value="m">Masculino</option>
                  <option value="f">Femenino</option>
                </select>

                {error.gender && (
                  <p className="text-red text-xs italic">{error.gender}</p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Teléfono
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={handleChangeInput}
                  placeholder="123-456-78910"
                />
                {error.phone && (
                  <p className="text-red text-xs italic">{error.phone}</p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                name="email"
                placeholder="correo electronico"
                value={email}
                onChange={handleChangeInput}
              />

              {error.email && (
                <p className="text-red text-xs italic">{error.email}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-amber-500 text-white uppercase py-2 rounded-md w-full"
            >
              enviar
            </button>
          </form>
        </div>
        <div>
          <img className="mt-40" src={Finance} />
        </div>
      </div>
    </div>
  );
}

export default REgistrationForm;
