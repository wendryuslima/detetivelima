import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface AccordionItemProps {
  itemTitle: string;
  itemContent: string;
}
const AccordionItems = ({ itemTitle, itemContent }: AccordionItemProps) => {
  return (
    <Accordion
      data-aos="fade-up"
      className="w-full gap-4 px-4  text-primary"
      type="single"
      collapsible
    >
      <AccordionItem
        className=" px-4 gap-4 rounded-lg border-b border-solid"
        value="item-1"
      >
        <AccordionTrigger>{itemTitle}</AccordionTrigger>
        <AccordionContent className="text-secundary text-left mt-6">
          {itemContent}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionItems;
