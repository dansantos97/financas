import { Category } from "../types/Category"

export const categories: Category = {
  food: { title: 'Alimentação', color: 'blue', expense: true },
  rent: { title: 'Supérfluos', color: 'brown', expense: true },
  funny: { title: 'Lazer', color: 'orange', expense: true },
  salary: { title: 'Salário', color: 'green', expense: false },
  extra: { title: 'Extras', color: 'green', expense: false },
}
