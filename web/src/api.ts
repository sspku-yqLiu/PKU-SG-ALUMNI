import axios from "axios";

export function getFeePaymentStatus({
  year,
  name,
}: {
  year: string;
  name: string;
}) {
  return axios.post<{ paid: boolean }>("http://localhost:3000/api/feeQuery", {
    year,
    name,
  });
}

export function getActivities() {
  return axios.post<{ activities: { title: string; date: string }[] }>(
    "http://localhost:3000/api/timeline"
  );
}
