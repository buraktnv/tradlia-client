import { FC } from "react";

export type OrderStatusKey =
  | "new"
  | "pending"
  | "waiting-approval"
  | "in-transit"
  | "delivered"
  | "completed"
  | "canceled"
  | "troubled";

const STATUS_STYLES: Record<OrderStatusKey, { label: string; dot: string; chip: string }> = {
  new: { label: "New Order", dot: "bg-brand-400", chip: "bg-brand-50 text-brand-700" },
  pending: { label: "To Be Shipped", dot: "bg-brand-400", chip: "bg-brand-50 text-brand-700" },
  "waiting-approval": {
    label: "Waiting Approval",
    dot: "bg-amber-500",
    chip: "bg-amberTint text-amberDark",
  },
  "in-transit": { label: "In Transit", dot: "bg-amber-500", chip: "bg-amberTint text-amberDark" },
  delivered: { label: "Delivered", dot: "bg-success", chip: "bg-successTint text-successDark" },
  completed: { label: "Completed", dot: "bg-success", chip: "bg-successTint text-successDark" },
  canceled: { label: "Canceled / Returned", dot: "bg-danger", chip: "bg-dangerTint text-dangerDark" },
  troubled: { label: "Troubled", dot: "bg-danger", chip: "bg-dangerTint text-dangerDark" },
};

const OrderStatusChip: FC<{ status?: OrderStatusKey }> = ({ status }) => {
  if (!status || !STATUS_STYLES[status]) return null;
  const s = STATUS_STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-xs font-medium ${s.chip}`}
    >
      <span className={`pulse-dot inline-block h-2 w-2 rounded-full ${s.dot}`} aria-hidden="true" />
      {s.label}
    </span>
  );
};

export default OrderStatusChip;
