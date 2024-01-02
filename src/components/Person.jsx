import PropTypes from "prop-types";
const Person = ({ personName, personImg, personColor, personText, alt }) => {
  return (
    <div className="flex flex-col items-center p-4 gap-4 bg-blue-200">
      <div className="flex flex-col items-center">
        <h3 className={"text-4xl " + personColor}>{personName}</h3>
        <img className="h-48" src={personImg} alt={alt} />
        <p className={"bg-white border-black border-2 px-2 " +  personColor}>
          {personText}
        </p>
      </div>
    </div>
  );
};

Person.propTypes = {
  personName: PropTypes.string.isRequired,
  personImg: PropTypes.string.isRequired,
  personColor: PropTypes.string.isRequired,
  personText: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Person;
