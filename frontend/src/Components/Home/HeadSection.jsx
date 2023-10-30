import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BalanceIcon from "@mui/icons-material/Balance";
import HotelSharpIcon from "@mui/icons-material/HotelSharp";
import WorkspacePremiumSharpIcon from "@mui/icons-material/WorkspacePremiumSharp";
import MedicationLiquidSharpIcon from "@mui/icons-material/MedicationLiquidSharp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Headsection() {
  return (
    <>
      <Typography gutterBottom variant="h4" component="div" className="text-start pb-2">
        Welcome Back!
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ textAlign: "center" }}>
              <Typography>
                <BalanceIcon className="text-primary fs-2" />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                42.8M
              </Typography>
              <Typography variant="body2" className="fw-semibold">
                Total Revenue
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item  md={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ textAlign: "center" }}>
              <Typography>
                <HotelSharpIcon className="text-primary fs-2" />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                25.8K
              </Typography>
              <Typography variant="body2" className="fw-semibold">
                Total Patients
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ textAlign: "center" }}>
              <Typography>
                <MedicationLiquidSharpIcon className="text-primary fs-2" />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                380
              </Typography>
              <Typography variant="body2" className="fw-semibold">
                Total Doctors
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ textAlign: "center" }}>
              <Typography>
                <WorkspacePremiumSharpIcon className="text-primary fs-2" />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                20
              </Typography>
              <Typography variant="body2" className="fw-semibold">
                Total Specialities
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
