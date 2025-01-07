import axios from "axios";

// 使用环境变量
const API_URL = import.meta.env.VITE_API_URL;

export async function getFeePaymentStatus({
  year,
  name,
}: {
  year: string;
  name: string;
}) {
  const res = await axios.post<{ paid: boolean }>(`${API_URL}/feeQuery`, {
    year,
    name,
  });

  return res;
}

export async function getActivities() {
  const res = await axios.post<{
    activities: { title: string; date: string }[];
  }>(`${API_URL}/timeline`);

  return res;
}
