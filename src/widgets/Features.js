import Feature from "../components/Feature";
import blockchainImage from "../images/blockchain.png";
import cylinderImage from "../images/database.png";
import networkingImage from "../images/networking.png";
import transactionImage from "../images/cpu.png";
import { Grid, Typography } from "@mui/material";

function Features() {
  return (
    <Grid container item xs={12} justifyContent={"center"}>
      <Grid container item xs={12} justifyContent={"center"}>
        <Typography variant={"h2"}>Features</Typography>
      </Grid>
      <Feature image={networkingImage} justify={"end"} xs lg />
      <Feature
        primary={"Immediately start writing business logic"}
        secondary={
          "All the technical parts are taken care of by low-code framework, so that developers can focus on the business logic."
        }
        xs
        lg
        justify={"start"}
      />
      <Feature image={cylinderImage} justify={"start"} xs />
      <Feature
        primary={"Internal Data Management"}
        secondary={
          "Nucleoid runtime comes with own data storage, but you also can export or stream your data to external storage system."
        }
        justify={"end"}
        xs
        lg
      />
      <Feature image={cylinderImage} justify={"start"} lg />
      <Feature image={blockchainImage} justify={"end"} xs lg />
      <Feature
        primary={"All you need is JavaScript"}
        secondary={
          "Nucleoid runtime lets you code entire backend including data ops only with JavaScript, and no SQL or anything else needed."
        }
        justify={"start"}
        xs
        lg
      />
      <Feature image={transactionImage} justify={"start"} xs />
      <Feature
        primary={"Lighting fast"}
        secondary={
          "Since data and logic in the same box, you get extreme speed without requiring tuning like connection pools, transaction manager etc."
        }
        justify={"end"}
        xs
        lg
      />
      <Feature image={transactionImage} justify={"start"} lg />
    </Grid>
  );
}

export default Features;
