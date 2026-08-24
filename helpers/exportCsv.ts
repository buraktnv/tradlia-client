/**
 * Export tabular data as a CSV file download, Excel-compatible
 * (UTF-8 BOM so Turkish characters render correctly).
 */
export function exportCsv(filename: string, headers: string[], rows: (string | number)[][]) {
  const escape = (cell: string | number) => {
    const str = String(cell ?? "");
    return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
  };

  const csv = [headers, ...rows].map((row) => row.map(escape).join(";")).join("\r\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.endsWith(".csv") ? filename : `${filename}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default exportCsv;
