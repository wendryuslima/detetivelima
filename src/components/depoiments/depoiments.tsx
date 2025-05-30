import DepoimentsItem from "./depoiments-item";

const Depoiments = () => {
  return (
    <div
      id="depoiments"
      className="mt-24 flex flex-col items-center justify-center gap-4"
    >
      <div data-aos="fade-up">
        <h2>Depoimentos</h2>
      </div>
      <p
        data-aos="fade-down"
        className="mx-auto items-center justify-center text-center text-sm font-semibold"
      >
        Não é só o que dizemos, é o que nossos clientes comprovam.
      </p>
      <DepoimentsItem />
    </div>
  );
};

export default Depoiments;
