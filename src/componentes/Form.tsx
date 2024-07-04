'use client';

import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    NOME: '',
    TELEFONE: '',
    SEGMENTO: '',
    EMAIL: '',
    EMPRESA: '',
    NECESSIDADE: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://api.sheetmonkey.io/form/b1xeaY2CawnMWy7eAK7WTk',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        alert('Informações enviadas com sucesso!');
      } else {
        alert('Erro ao enviar informalções.');
      }
    } catch (error) {
      console.error('Erro durante o envio das informações:', error);
      alert('Erro ao enviar informações.');
    }
  };

  return (
    <div className="pb-14 px-5 w-full">
      <h1 className="text-[#333333] text-sm lg:text-lg opacity-70 text-center py-4">
        ENVIE-NOS UMA MENSAGEM QUE LHE REPONDEREMOS EM ATÉ 2 HORAS
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" mx-auto bg-[#F2F2F0] p-8 shadow-lg rounded-md border-2 border-yellow-300 2xl:h-[500px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 2xl:h-[80%]">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="NOME"
              id="nome"
              value={formData.NOME}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="nome"
              className="peer-focus:font-medium absolute text-xs tracking-wide text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              NOME
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              id="email"
              name="EMAIL"
              value={formData.EMAIL}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-xs tracking-wide text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              EMAIL
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              id="telefone"
              name="TELEFONE"
              value={formData.TELEFONE}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="telefone"
              className="peer-focus:font-medium absolute text-xs tracking-wide text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              TELEFONE
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="segmento"
              name="SEGMENTO"
              value={formData.SEGMENTO}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="segmento"
              className="peer-focus:font-medium absolute text-xs tracking-wide text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              SEGMENTO
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="empresa"
              name="EMPRESA"
              value={formData.EMPRESA}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="empresa"
              className="peer-focus:font-medium absolute text-xs tracking-wide text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              EMPRESA
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="necessidade"
              name="NECESSIDADE"
              value={formData.NECESSIDADE}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-xs tracking-wide text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              DEIXE SUA MENSAGEM
            </label>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#FECC09] font-medium py-3 px-16 rounded-2xl"
          >
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
