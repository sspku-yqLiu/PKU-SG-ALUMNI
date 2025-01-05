import Card from "../../../components/Card";
import { useState } from "react";

import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { getFeePaymentStatus } from "../../../api";
import { LoadingButton } from "@mui/lab";

import { useSnackbar } from "notistack";

export default function FeeQuery() {
  const { enqueueSnackbar } = useSnackbar();
  const [query, setQuery] = useState({
    year: "",
    name: "",
  });
  const { mutate: getFeePaymentStatusMutate, isPending } = useMutation({
    mutationFn: getFeePaymentStatus,
  });

  return (
    <Card>
      <b style={{ width: "100%" }}>查询会员状态</b>

      <TextField
        style={{ width: 120 }}
        id="outlined-basic"
        label="毕业年份"
        variant="outlined"
        value={query.year}
        onChange={(e) => setQuery({ ...query, year: e.target.value })}
      />
      <TextField
        style={{ width: 120, flex: 1 }}
        id="outlined-basic"
        label="姓名"
        variant="outlined"
        value={query.name}
        onChange={(e) => setQuery({ ...query, name: e.target.value })}
      />
      <LoadingButton
        loading={isPending}
        onClick={() => {
          getFeePaymentStatusMutate(query, {
            onSuccess: ({ data }) => {
              console.log(data);
              if (data.paid) {
                enqueueSnackbar("已缴费", {
                  variant: "success",
                  autoHideDuration: 3000,
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                });
              } else {
                enqueueSnackbar(
                  "未查询到缴费记录，如已缴费请稍后确认或联系管理员",
                  {
                    variant: "error",
                    autoHideDuration: 3000,
                    anchorOrigin: {
                      vertical: "top",
                      horizontal: "center",
                    },
                  }
                );
              }
            },
          });
        }}
        style={{ width: "100%", backgroundColor: "#940408", color: "#fff" }}
        variant="contained"
      >
        查询
      </LoadingButton>
    </Card>
  );
}
