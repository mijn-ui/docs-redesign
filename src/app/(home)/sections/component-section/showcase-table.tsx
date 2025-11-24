import { cn } from "@mijn-ui/react";
import { Ellipsis } from "lucide-react";

type TableDataType = {
  name: string;
  price: string;
  status: "Paid" | "Pending" | "Returned";
};

const TABLE_DATA: TableDataType[] = [
  {
    name: "Alex Cooper",
    price: "$1042.25",
    status: "Paid",
  },
  {
    name: "Leonard Krasner",
    price: "$1042.25",
    status: "Pending",
  },
  {
    name: "Cameron Williamson",
    price: "$1042.25",
    status: "Paid",
  },
  {
    name: "Lindsay Walton",
    price: "$1042.25",
    status: "Returned",
  },
];

const ShowcaseTable = () => (
  <div className="w-fit max-w-full overflow-hidden rounded-xl border border-outline-default">
    <table className="relative text-sm">
      <thead className="h-8 bg-bg-secondary">
        <tr className="border-outline-default border-b text-left">
          <th className="px-2 py-1 font-semibold text-xxs sm:px-3 sm:py-2 sm:text-xs">
            Customer
          </th>
          <th className="px-2 py-1 font-semibold text-xxs sm:px-3 sm:py-2 sm:text-xs">
            Total
          </th>
          <th className="px-2 py-1 font-semibold text-xxs sm:px-3 sm:py-2 sm:text-xs">
            Status
          </th>
          <th />
        </tr>
      </thead>

      <tbody className="divide-y divide-border bg-bg-default-alt">
        {TABLE_DATA.map((user) => (
          <RenderTableCell key={user.name} {...user} />
        ))}
      </tbody>
    </table>
  </div>
);

const RenderTableCell = ({ name, price, status }: TableDataType) => {
  const statusColor =
    status === "Paid"
      ? "bg-green-500 ring-green-200"
      : status === "Pending"
        ? "bg-yellow-500 ring-yellow-200"
        : "bg-red-500 ring-red-200";

  return (
    <tr className="text-left">
      <td className="block max-w-32 truncate px-2 py-1 align-middle text-xxs sm:px-3 sm:py-2 sm:text-xs">
        {name}
      </td>
      <td className="px-2 py-1 align-middle text-xxs sm:px-3 sm:py-2 sm:text-xs">
        {price}
      </td>
      <td className="px-2 py-1 align-middle text-xxs sm:px-3 sm:py-2 sm:text-xs">
        <p className="flex items-center gap-2 text-fg-tertiary text-xxs">
          <span className={cn("block size-1 rounded-full ring", statusColor)} />
          <span>{status}</span>
        </p>
      </td>

      <td className="px-2 py-1 align-middle text-xxs sm:px-3 sm:py-2 sm:text-xs">
        <Ellipsis />
      </td>
    </tr>
  );
};

export default ShowcaseTable;
