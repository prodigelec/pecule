import Image from "next/image";
import { Landmark } from "lucide-react";
import { findBank } from "@/lib/banks";

type BankLogoProps = { bankId: string; size?: number; className?: string };

/** Logo de la banque (public/banks), ou icône neutre pour « Autre banque ». */
export function BankLogo({ bankId, size = 40, className = "" }: BankLogoProps) {
  const bank = findBank(bankId);
  const frame = `shrink-0 overflow-hidden rounded-xl border border-border bg-white ${className}`;

  if (!bank) {
    return (
      <span className={`flex items-center justify-center text-ink-muted ${frame}`} style={{ width: size, height: size }}>
        <Landmark aria-hidden style={{ width: size * 0.5, height: size * 0.5 }} />
      </span>
    );
  }

  return (
    <Image
      src={`/banks/${bank.id}.png`}
      alt={bank.name}
      width={size}
      height={size}
      className={frame}
    />
  );
}
