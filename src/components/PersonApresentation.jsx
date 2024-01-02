import { personBlob, personSrKinkas, personMuphin } from "../data/Persons";
import PropTypes from "prop-types";
import Person from "./Person";
const PersonApresentation = ({ returnStart }) => {
  return (
    <div>
      <button
        className="ml-4 mt-4 py-3 px-7 bg-blue-500 text-white font-bold rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out self-start"
        onClick={returnStart}
      >
        Voltar
      </button>

      <Person
        personName={personSrKinkas.name}
        personImg={personSrKinkas.img}
        personColor={personSrKinkas.color}
        personText={personSrKinkas.text}
        alt={personSrKinkas.alt}
      />

      <Person
        personName={personBlob.name}
        personImg={personBlob.img}
        personColor={personBlob.color}
        personText={personBlob.text}
        alt={personBlob.alt}
      />

      <Person
        personName={personMuphin.name}
        personImg={personMuphin.img}
        personColor={personMuphin.color}
        personText={personMuphin.text}
        alt={personMuphin.alt}
      />
    </div>
  );
};

PersonApresentation.propTypes = {
  returnStart: PropTypes.func.isRequired,
};

export default PersonApresentation;
