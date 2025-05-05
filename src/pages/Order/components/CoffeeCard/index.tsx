import { CoffeeContainer, Line, TextRegularM } from "./styles";

import RemoveButton from "../../../../assets/RemoveButton.svg";
import CounterButton from "../../../../assets/Counter.svg";
import { CoffeeItem } from "../../../../utils/coffees";

interface CoffeeCardProps {
  coffeeItem: CoffeeItem;
}

export function CoffeeCard({ coffeeItem }: CoffeeCardProps) {
  return (
    <div>
      <CoffeeContainer>
        <img src={coffeeItem.icon} width={64} height={64} />

        <div>
          <TextRegularM>{coffeeItem.title}</TextRegularM>
          <div style={{ display: "flex", gap: "10px" }}>
            <img src={CounterButton} />
            <img src={RemoveButton} />
          </div>
        </div>
        <TextRegularM>{coffeeItem.cost}</TextRegularM>
      </CoffeeContainer>
      <Line />
    </div>
  );
}
