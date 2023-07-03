import { Scope } from "./Scope";

export interface ILocals {
  userId?: string;
  accountId: string;
  productId?: string;
  groupId?: string;
  taskId?: string;
  scopes?: Scope[];
  token?: string;
  orderId?: string;
}
