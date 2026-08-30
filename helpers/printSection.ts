/**
 * Prints only the DOM node with `data-print-area` when the body has the
 * `printing` class (see @media print rules in styles/globals.css).
 * Usage:
 *   <div data-print-area="invoice">…</div>
 *   printSection("invoice")
 */
export function printSection(areaId: string) {
  const area = document.querySelector(`[data-print-area="${areaId}"]`);
  if (!area) {
    console.warn(`printSection: no [data-print-area="${areaId}"] element found`);
    return;
  }
  document.body.classList.add("printing");
  // give the print styles a frame to apply before showing the dialog
  setTimeout(() => {
    window.print();
    document.body.classList.remove("printing");
  }, 50);
}

export default printSection;
