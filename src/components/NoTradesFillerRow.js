import React from "react";

export function NoTradesFillerRow({ colSpan }) {
  return (
    <tr>
      <td colSpan={colSpan}>No trades entered</td>
    </tr>
  );
}
