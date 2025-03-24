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
      className="w-full gap-4 px-4 text-primary"
      type="single"
      collapsible
    >
      <AccordionItem
        className="gap-4 rounded-lg border-b border-solid px-4"
        value="item-1"
      >
        <AccordionTrigger>{itemTitle}</AccordionTrigger>
        <AccordionContent className="text-secundary mt-6 text-left">
          {itemContent}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionItems;
