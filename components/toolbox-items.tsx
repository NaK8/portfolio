import { twMerge } from "tailwind-merge";
import TechIcon from "./tech-icon";
import { Fragment } from "react";

interface ToolboxItems {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemWrapperClassName?: string;
}

const ToolboxItems = ({
  items,
  className,
  itemWrapperClassName,
}: ToolboxItems) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemWrapperClassName,
        )}
      >
        {[...new Array(2)].fill(0).map((_, i) => (
          <Fragment key={i}>
            {items.map((item) => (
              <div
                key={crypto.randomUUID()}
                className="outlin-2 inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-white/10"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
