import React, { useState } from 'react';
import CountryCard from './components/CountryCard';

const App = () => {
  const [countryName, setCountryName] = useState('colombia');

  const handleSubmit = (event) => {
    event.preventDefault();

    // El Target es quien emite el evento, en este caso en particular es el formulario
    const form = event.target;

    // Cualquier input dentro de un formulario puede ser accedido directamente con su id
    const inputCountry = form.countryNameInput;
    setCountryName(inputCountry.value);
    form.reset();
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10 text-white text-xl">
      <h1 className="text-4xl mb-8">Countries Wiki</h1>
      <form onSubmit={handleSubmit} className="mb-8 flex flex-row gap-3">
        <input
          type="text"
          className="text-black px-2 py-3"
          placeholder="Type a country name"
          id="countryNameInput"
        />
        <input
          className="bg-slate-400 px-2 py-3 text-black hover:text-white rounded-lg"
          type="submit"
          value="Search"
        />
      </form>
      <section className="flex flex-row flex-wrap gap-5 justify-center">
        <CountryCard countryName={countryName} />
      </section>
    </div>
  );
};

export default App;
