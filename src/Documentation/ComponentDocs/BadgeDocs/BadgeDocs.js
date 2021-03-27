import "./BadgeDocs.css";
import Gist from "react-gist";
import { Badge } from "forkui-lib";
export const BadgeDocs = () => {
  return (
    <div>
      <h1>Badge Component</h1>
      <p>
        Badges are used to highlight an item's status for quick recognition.
      </p>
      <h3>Usage</h3>
      <div className="usage">
        <Badge />
      </div>
      <Gist id="5a5576c36f4409a9d03163afdbe4efa9" />
      <h3>Badge Color Scheme</h3>
      <p>
        Pass the <code>colorScheme</code> prop to customize the color of the
        Badge. colorScheme can be <code>default, green, red, and purple</code>.
      </p>
      <div className="usage make-flex">
        <Badge colorScheme="default" text="default" />
        <Badge colorScheme="green" text="success" />
        <Badge colorScheme="red" text="removed" />
        <Badge colorScheme="purple" text="new" />
      </div>
      <Gist id="e7759f86d4025f7b40b1e59ab0dfff97" />
      <h3>Badge Variants</h3>
      <p>
        Pass the <code>variant</code> prop and set it to either{" "}
        <code>subtle, solid, or outline</code> to get a different style.
      </p>
      <div className="usage make-flex">
        <Badge colorScheme="green" variant="outline" />
        <Badge colorScheme="green" variant="solid" text="success" />
        <Badge colorScheme="red" text="removed" variant="subtle" />
      </div>
      <Gist id="db750fae2eb1fb25e8ddf0d47ee8b6c2" />
      <h3>Different Sized Badges</h3>
      <p>
        Use <code>Size</code> prop to change the size of the badge. You can use{" "}
        <strong>three</strong> sizes for badges, i.e.{" "}
        <strong>sm, md, lg</strong>. The default value is <code>sm</code>
      </p>
      <div className="usage make-flex">
        <Badge colorScheme="purple" size="sm" text="new" />
        <Badge colorScheme="purple" size="md" text="new" />
        <Badge colorScheme="purple" size="lg" text="new" />
      </div>
      <Gist id="80bb31346e1872968d79f1915d43e831" />
    </div>
  );
};
