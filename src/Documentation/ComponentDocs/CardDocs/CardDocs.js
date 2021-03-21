import "./CardDocs.css";
import { Button } from "../../../MainArea/Button/Button";
export const CardDocs = () => {
  return (
    <div>
      <h1>Cards</h1>
      <p>
        These are some of the card design available in this library. Just copy
        the code and customize it for using it in your next project.
      </p>
      <div className="card-I">
        <div className="card-I-title">Card Title</div>
        <div className="card-I-subtitle">Card Subtitle Div</div>
        <div className="card-I-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <div className="card-I-button-div">
          <Button
            colorScheme="fb"
            text="Read More"
            size="sm"
            variant="secondary"
            borderRadius="b3"
          />
          <Button
            colorScheme="red"
            text="Read More"
            size="sm"
            borderRadius="b3"
          />
        </div>
      </div>
    </div>
  );
};
