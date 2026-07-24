import Image from "next/image";

type BrandProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function Brand({ compact = false, inverse = false }: BrandProps) {
  return (
    <span
      className={`brand${compact ? " brand--compact" : ""}${inverse ? " brand--inverse" : ""}`}
      aria-label="NiKa Store"
    >
      <span className="brand__word brand__word--left" aria-hidden="true">
        NiKa
      </span>
      <span className="brand__mark" aria-hidden="true">
        <Image
          src="/images/logo-original.jpeg"
          alt=""
          width={945}
          height={1239}
          sizes="52px"
        />
      </span>
      <span className="brand__word brand__word--right" aria-hidden="true">
        Store
      </span>
    </span>
  );
}
