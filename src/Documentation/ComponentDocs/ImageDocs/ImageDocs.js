import "./ImageDocs.css";
import { Image } from "../../../MainArea/Image/Image";
export const ImageDocs = ({ src, alt }) => {
  return (
    <div>
      <h1>Image</h1>
      <p>The Image component is used to display images.</p>
      <h2>Usage</h2>
      <div className="usage">
        <Image src="https://bit.ly/3qZAJqc" />
      </div>
      <h2>Various Sizes Images</h2>
      <p>
        Use <code>size</code> prop to change the size of the image. Available
        sizes are <code>sm, md, and lg</code>. The default value of size id{" "}
        <code>md</code>
      </p>
      <div className="usage make-flex">
        <Image src="https://bit.ly/3qZAJqc" size="sm" />
        <Image src="https://bit.ly/3qZAJqc" size="md" />
        <Image src="https://bit.ly/3qZAJqc" size="lg" />
      </div>
      <h3>Image with border radius</h3>
      <p>
        We can set the border-radius to different values using the{" "}
        <code>borderSize</code>prop. Values it can take are -{" "}
        <code>b1, b2, b3, and full</code>. <strong>full</strong> makes the image{" "}
        <strong>circle</strong>. The default value is <code>b1</code>
      </p>
      <div className="usage make-flex">
        <Image src="https://bit.ly/3qZAJqc" borderSize="b2" />
        <Image src="https://bit.ly/3qZAJqc" borderSize="full" />
      </div>

      <h3>FallBack Support</h3>
      <p>
        You can provide a fallback image for when there is an error loading the
        src of the image.
      </p>
      <div className="usage">
        <Image
          src="https://bit.ly/broken-link"
          fallBackSrc="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
};
