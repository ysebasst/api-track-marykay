import app from "./app";
import "./database/db";

app.listen(app.get("port"), () =>
  console.log(`Server on: http://localhost:${app.get("port")}`)
);
