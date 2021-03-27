import "./ImageDocs.css";
import Gist from "react-gist";
import { Image } from "forkui-lib";
export const ImageDocs = ({ src, alt }) => {
  return (
    <div>
      <h1>Image</h1>
      <p>The Image component is used to display images.</p>
      <h2>Usage</h2>
      <div className="usage">
        <Image src="https://bit.ly/3qZAJqc" />
      </div>
      <Gist id="9c521af5bb9a308eeb658b1346b5c874" />
      <h2>Various Sizes Images</h2>
      <p>
        Use <code>size</code> prop to change the size of the image. Available
        sizes are <code>xs, sm, md, and lg</code>. The default value of size id{" "}
        <code>md</code>
      </p>
      <div className="usage make-flex">
        <Image src="https://bit.ly/3qZAJqc" size="sm" />
        <Image src="https://bit.ly/3qZAJqc" size="md" />
        <Image src="https://bit.ly/3qZAJqc" size="lg" />
      </div>
      <Gist id="d720c01376ace08d2deaccd1a25274a3" />
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
      <Gist id="3bdcf4b85abeea04f926ed0fbfc899cf" />

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
      <Gist id="d73ff13132b4319c3f174f6cacfbf7d0" />
    </div>
  );
};
