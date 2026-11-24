"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { BankLogo } from "@/components/account/bank-logo";
import { BankOptionList, type BankOption } from "@/components/account/bank-option-list";
import { FormField } from "@/components/ui/form-field";
import { banks, findBank, OTHER_BANK_ID } from "@/lib/banks";

const options: BankOption[] = [...banks, { id: OTHER_BANK_ID, name: "Autre banque" }];

/** « Crédit » et « credit » doivent se trouver pareil. */
const normalize = (text: string) => text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

type BankSelectProps = { error?: string; customNameError?: string };

/** Liste déroulante compacte avec recherche ; la valeur part dans le champ caché `bankId`. */
export function BankSelect({ error, customNameError }: BankSelectProps) {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => options.filter((o) => normalize(o.name).includes(normalize(query))), [query]);
  const current = selected === OTHER_BANK_ID ? "Autre banque" : findBank(selected)?.name;

  // Un clic en dehors ferme la liste.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => !rootRef.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  function choose(id: string) {
    setSelected(id);
    setOpen(false);
    setQuery("");
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    else if (event.key === "ArrowUp") setActiveIndex((i) => Math.max(i - 1, 0));
    else if (event.key === "Enter" && filtered[activeIndex]) choose(filtered[activeIndex].id);
    else if (event.key === "Escape") setOpen(false);
    else return;
    event.preventDefault();
  }

  return (
    <div className="flex flex-col gap-1.5">
      <span id="bank-label" className="text-sm font-medium text-ink">Banque</span>
      <input type="hidden" name="bankId" value={selected} />
      <div ref={rootRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby="bank-label"
          aria-describedby={error ? "bankId-error" : undefined}
          className={`flex w-full items-center gap-3 rounded-xl border bg-surface px-3 py-2.5 text-left outline-none focus:border-primary ${
            error ? "border-negative" : "border-border"
          }`}
        >
          {selected ? <BankLogo bankId={selected} size={32} /> : null}
          <span className={`flex-1 ${current ? "text-ink" : "text-ink-muted/80"}`}>{current ?? "Choisir votre banque"}</span>
          <ChevronDown aria-hidden className={`size-5 text-ink-muted transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-border bg-surface shadow-xl">
            <div className="flex items-center gap-2 border-b border-border px-3">
              <Search aria-hidden className="size-4 text-ink-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Rechercher une banque"
                aria-controls="bank-listbox"
                aria-activedescendant={filtered[activeIndex] ? `bank-option-${filtered[activeIndex].id}` : undefined}
                className="w-full bg-transparent py-3 text-ink outline-none placeholder:text-ink-muted/60"
              />
            </div>
            <BankOptionList options={filtered} selected={selected} activeIndex={activeIndex} onSelect={choose} onHover={setActiveIndex} />
          </div>
        )}
      </div>
      {error && (
        <span id="bankId-error" className="text-sm text-negative">
          {error}
        </span>
      )}
      {selected === OTHER_BANK_ID && (
        <FormField label="Nom de la banque" name="customBankName" maxLength={50} autoComplete="off" error={customNameError} />
      )}
    </div>
  );
}
