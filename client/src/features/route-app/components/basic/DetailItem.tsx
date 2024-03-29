"use client";

import Typography from "@/components/basic/Typography";
import toast from "react-hot-toast";
import { IoCopyOutline } from "react-icons/io5";

type DetailItemProps = {
  label: string;
  value: string;
};

export const DetailItem = ({ label, value }: DetailItemProps): JSX.Element => {
  const copyLink = () => {
    navigator.clipboard.writeText(value);
    toast.success("Copiado al portapapeles");
  };

  return (
    <div>
      <Typography className="mr-2">{label}:</Typography>

      <div className="inline-flex items-center gap-2">
        <Typography fontWeight="bold">{value}</Typography>

        <IoCopyOutline
          className="text-primary inline w-3 h-3 cursor-pointer"
          onClick={copyLink}
        />
      </div>
    </div>
  );
};
