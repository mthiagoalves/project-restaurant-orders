import { Product } from "src/product/entities/product.entity"
import { Table } from "src/table/entities/table.entity"
import { User } from "src/user/entities/user.entity"

export class Order {
  id?: string
  status?: string | null
  user?: User
  table?: Table
  createdAt?: Date
  updateAt?: Date
  products?: Product[]
}
