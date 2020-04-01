import { Product } from './interfaces/Product'

export default class ProductList {
  products: Product[]

  constructor(products: Product[]) {
    this.products = products
  }

  // Needs to return the correctly formatted string
  stringify(): string {
    return ''
  }
}
