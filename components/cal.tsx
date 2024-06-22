"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalMe() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="flex justify-center">
      <button
        data-cal-namespace=""
        data-cal-link="adam-gałecki/consultation-call"
        data-cal-config='{"layout":"month_view"}'
        className="px-4 py-2 mt-4 font-semibold text-white bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-600"
      >
        Book a consultation call
      </button>
    </div>
  );
}
