import { Product } from './interfaces/Product'

export default class ProductList {
  products: Product[]

  constructor(products: Product[]) {
    this.products = products
  }

  filter(): Product[] {
    return []
  }
}
