import {card} from "../../mock";
import Over from "./Over";

function Card () {

  return (
    <div className="sm:w-full md:w-full lg:w-3/4 mt-16 sm:mx-0 lg:mx-auto lg:columns-3 md:columns-2 sm:columns-1">
      {
        card.map((item) =>
          <Over key={item.id}
                {...item}
          />
        )
      }
    </div>
  )
}

export default Card;
