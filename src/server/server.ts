import express, { Request, Response } from "express";
import fs from "fs-extra";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/component-code", async (req: Request, res: Response) => {
  const { filePath } = req.query;

  if (!filePath || typeof filePath !== "string") {
    res.status(400).send("File path is required");
    return;
  }

  try {
    const componentCode = await fs.readFile(
      path.join(__dirname, filePath),
      "utf8",
    );
    res.send(componentCode);
  } catch (err) {
    console.error("Error reading component code:", err);
    res.status(500).send("Error reading component code");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
