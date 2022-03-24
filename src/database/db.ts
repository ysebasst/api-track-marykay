import { connect } from "mongoose";

connect(process.env.URI, () => {
  console.log("Database conected");
});
