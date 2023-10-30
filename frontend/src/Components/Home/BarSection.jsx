import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const uData = [4000, 3000, 2000, 2780, 1890];
const pData = [2400, 1398, 9800, 3908, 4800];
const xLabels = [
  "Speciality",
  "Pathalogist",
  "Cardiology",
  "Hematology",
  "Plastic Surgery",
];

export default function BarSection() {
  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8} >
        <Card>
          <CardContent >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="fw-semibold m-0 text-start"
            >
              Referral
            </Typography>
            <BarChart
              width={580}
              height={300}
              series={[
                { data: pData, id: "pvId" },
                { data: uData, id: "uvId" },
              ]}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Card>
          <CardContent>
          <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="fw-semibold m-0 text-start"
            >
            Achievements for Departments
            </Typography>
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["OPD", "ICU", "IDP"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              width={580}
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
