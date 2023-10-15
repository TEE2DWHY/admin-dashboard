const CountryModal = ({ hideCountryModal }) => {
  return (
    <>
      <div className="country-modal-container" onMouseLeave={hideCountryModal}>
        <ul className="country-modal">
          <li>
            <img
              className="country-img"
              src={"/images/uk.png"}
              alt="country-img"
            />
            English
          </li>
          <li>
            <img
              className="country-img"
              src={"/images/france.png"}
              alt="country-img"
            />
            French
          </li>
          <li>
            <img
              className="country-img"
              src={"/images/german.png"}
              alt="country-img"
            />
            Germany
          </li>
          <li>
            <img
              className="country-img"
              src={"/images/dutch.png"}
              alt="country-img"
            />
            Dutch
          </li>
        </ul>
      </div>
    </>
  );
};

export default CountryModal;
