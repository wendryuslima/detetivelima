import AccordionItems from "./accordion/accordion-item";

const FAQ = () => {
  return (
    <div
      id="FAQ"
      className="mt-24 flex w-full flex-col items-center justify-center gap-4 bg-white"
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-white">
        <div>
          <h2 data-aos="fade-left" className="mt-12 text-primary">
            Perguntas frequentes
          </h2>
        </div>

        <AccordionItems
          itemTitle="Quanto custa contratar para uma investigação particular?"
          itemContent="Para cada tipo de investigação existe um custo, precisamos estabelecer estratégias diferenciadas para cada situação, seja ela conjugal, empresarial ou familiar. Os valores de contratações variam de R$ 750,00 à R$ 4.500,00."
        />
        <AccordionItems
          itemTitle="Quanto tempo demora a investigação conjugal e quanto custa?"
          itemContent="Ideal é no mínimo em uma semana, onde é possível ter um dossiê completo e verificar se o cônjuge está traindo ou não, é necessário traçar a rota do alvo para alcançar o flagrante se ele existir. O custo de uma investigação conjugal depende do tempo necessário."
        />
        <AccordionItems
          itemTitle="Quais equipamentos podem ser utilizados pelo detetive particular?"
          itemContent="A equipe de detetives trabalha com equipamentos de última geração, que favorecem o monitoramento de pessoas e aquisição de provas concretas a respeito do caso, tais como rastreadores GPS, câmeras profissionais de filmagem, fotografia e escutas internas."
        />
        <AccordionItems
          itemTitle="Qual a garantia que tenho da descrição e do sigilo do serviço contratado?"
          itemContent="Total garantia, atuamos a mais de 15 anos, prestando serviços de alta qualidade ao nosso cliente, não solicitamos nenhuma ficha cadastral, o processo é 100% sigiloso."
        />
      </div>
    </div>
  );
};

export default FAQ;
