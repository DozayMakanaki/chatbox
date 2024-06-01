import React, { ComponentPropsWithoutRef } from "react";

export default function Button(props: ComponentPropsWithoutRef<"button">) {
  return <button {...props} className="bg-green-500 rounded-full text-white p-[0.875rem] active:bg-green-600" />;
}
