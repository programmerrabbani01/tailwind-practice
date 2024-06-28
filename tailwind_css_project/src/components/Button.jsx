import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../utils/cn.js";

const Button = ({ className, ...restProps }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <button
        className={cn(
          " bg-blue-500 text-white px-4 py-2 rounded text-xl capitalize font-sans font-semibold",
          className,
          {
            "bg-gray-500": loading,
          }
        )}
        onClick={() => setLoading(!loading)}
        {...restProps}
      >
        be a good human
      </button>
    </div>
  );
};

export default Button;
