import ExpressoTradicional from "../assets/ExpressoTradicional.svg";
import Americano from "../assets/Americano.svg";
import ExpressoCremoso from "../assets/ExpressoCremoso.svg";
import ColdCoffee from "../assets/ColdCoffee.svg";
import CoffeeAndMilk from "../assets/CoffeAndMilk.svg";
import Latte from "../assets/Latte.svg";
import Capuccino from "../assets/Capuccino.svg";
import Macchiato from "../assets/Macchiato.svg";
import Mochaccino from "../assets/Mochaccino.svg";
import HotChocolate from "../assets/HotChocolate.svg";
import Cubano from "../assets/Cubano.svg";
import Havaiano from "../assets/Havaiano.svg";
import Arabe from "../assets/Arabe.svg";
import Irlandes from "../assets/Irlandes.svg";

export interface CoffeeItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  cost: string;
  tags: string[];
}

export const CoffeesItems: CoffeeItem[] = [
  {
    id: 1,
    icon: ExpressoTradicional,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    cost: "R$ 9,90",
    tags: ["TRADICIONAL"],
  },
  {
    id: 2,
    icon: Americano,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    cost: "R$ 9,90",
    tags: ["TRADICIONAL"],
  },
  {
    id: 3,
    icon: ExpressoCremoso,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    cost: "R$ 9,90",
    tags: ["TRADICIONAL"],
  },
  {
    id: 4,
    icon: ColdCoffee,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    cost: "R$ 9,90",
    tags: ["TRADICIONAL", "GELADO"],
  },
  {
    id: 5,
    icon: CoffeeAndMilk,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    cost: "R$ 9,90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 6,
    icon: Latte,
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    cost: "R$ 9,90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 7,
    icon: Capuccino,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    cost: "R$ 9,90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 8,
    icon: Macchiato,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    cost: "R$ 9,90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 9,
    icon: Mochaccino,
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    cost: "R$ 9,90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 10,
    icon: HotChocolate,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    cost: "R$ 9,90",
    tags: ["ESPECIAL", "COM LEITE"],
  },
  {
    id: 11,
    icon: Cubano,
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    cost: "R$ 9,90",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
  },
  {
    id: 12,
    icon: Havaiano,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    cost: "R$ 9,90",
    tags: ["ESPECIAL"],
  },
  {
    id: 13,
    icon: Arabe,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    cost: "R$ 9,90",
    tags: ["ESPECIAL"],
  },
  {
    id: 14,
    icon: Irlandes,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    cost: "R$ 9,90",
    tags: ["ESPECIAL", "ALCOÓLICO"],
  },
];
