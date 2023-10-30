import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const pieParams = { height: 200, margin: { right: 5 } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const data = [
  { label: "Orthopedic", value: 900 },
  { label: "Pediatrics", value: 700 },
  { label: "Neurology", value: 500 },
  { label: "Obstetrics", value: 300 },
  { label: "Cardiology", value: 100 },
];

const revenuedata = [
  { label: "Orthopedic", value: "$ 33K" },
  { label: "Pediatrics", value: "$ 29K" },
  { label: "Neurology", value: "$ 23K" },
  { label: "Cardiology", value: "$ 18K" },
];

export default function ChartSection() {
  return (
    <section className="my-3">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Item>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="fw-semibold"
              >
                Patients Top 5 Specialist
              </Typography>
              <Stack direction="column" alignItems="center">
                <PieChart
                  series={[
                    {
                      data: [
                        { value: 10 },
                        { value: 15 },
                        { value: 20 },
                        { value: 5 },
                        { value: 12 },
                      ],
                      paddingAngle: 5,
                      innerRadius: 60,
                      outerRadius: 80,
                    },
                  ]}
                  slotPropslegend={{ hidden: true }}
                  {...pieParams}
                />
                {data.map((item) => (
                  <Typography
                    key={item.label}
                    variant="body2"
                    color="textSecondary"
                  >
                    <FiberManualRecordIcon className="text-primary" />{" "}
                    {item.label} {item.value}
                  </Typography>
                ))}
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="fw-semibold m-0"
              >
                Revenue Top 3 Specialist
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                -15% than last month
              </Typography>
              <Stack>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10 },
                        { id: 1, value: 15 },
                        { id: 2, value: 20 },
                        { id: 2, value: 25 },
                      ],
                    },
                  ]}
                  {...pieParams}
                />
                {revenuedata.map((item) => (
                  <Typography
                    key={item.label}
                    variant="body2"
                    color="textSecondary"
                  >
                    <FiberManualRecordIcon className="text-primary" />{" "}
                    {item.label} {item.value}
                  </Typography>
                ))}
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="fw-semibold m-0 "
              >
                Achievement for Top 4
              </Typography>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                series={[
                  {
                    data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                    showMark: ({ index }) => index % 2 === 0,
                  },
                ]}
                width={630}
                height={300}
              />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >Orthopedic  Pediatrics  Neurology  Cardiology</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
