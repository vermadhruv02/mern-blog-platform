// types/express/index.d.ts
import { IUser } from "../../models/user.model"; // Adjust the path as needed

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

