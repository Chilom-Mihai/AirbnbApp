import { findCountryByCode } from "@/utils/countries";
import React from "react";
import Image from "next/image";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validCountry = findCountryByCode(countryCode)!;
  const countryName =
    validCountry.name.length > 20
      ? `${validCountry.name.substring(0, 20)}...`
      : validCountry.name;
  return (
    <span className="flex justify-start items-center gap-2 text-sm">
      <Image
        src={validCountry.flagUrl}
        alt={`${validCountry.name} flag`}
        width={16}
        height={12}
      />
      {countryName}
    </span>
  );
}

export default CountryFlagAndName;
