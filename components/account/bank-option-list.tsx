import { Check } from "lucide-react";
import { BankLogo } from "@/components/account/bank-logo";

export type BankOption = { id: string; name: string };

type BankOptionListProps = {
  options: BankOption[];
  selected: string;
  activeIndex: number;
  onSelect: (id: string) => void;
  onHover: (index: number) => void;
};

/** Liste filtrée des banques (rôle listbox), avec logo et coche sur la banque choisie. */
export function BankOptionList({ options, selected, activeIndex, onSelect, onHover }: BankOptionListProps) {
  if (options.length === 0) {
    return <p className="px-3 py-4 text-center text-sm text-ink-muted">Aucune banque trouvée. Choisissez « Autre banque ».</p>;
  }

  return (
    <ul id="bank-listbox" role="listbox" aria-label="Banques" className="max-h-64 overflow-y-auto py-1">
      {options.map((option, index) => (
        <li
          key={option.id}
          id={`bank-option-${option.id}`}
          role="option"
          aria-selected={option.id === selected}
          // mousedown plutôt que click : la sélection se fait avant que le champ de recherche perde le focus.
          onMouseDown={(event) => {
            event.preventDefault();
            onSelect(option.id);
          }}
          onMouseEnter={() => onHover(index)}
          className={`flex cursor-pointer items-center gap-3 px-3 py-2 ${index === activeIndex ? "bg-primary/10" : ""}`}
        >
          <BankLogo bankId={option.id} size={32} />
          <span className="flex-1 text-ink">{option.name}</span>
          {option.id === selected && <Check aria-hidden className="size-4 text-primary" />}
        </li>
      ))}
    </ul>
  );
}
