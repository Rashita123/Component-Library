import "./BadgeDocs.css";
import { Badge } from "../../../MainArea/Badge/Badge";
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
    </div>
  );
};
