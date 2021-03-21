import "./ButtonDocs.css";
import Gist from "react-gist";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Button } from "../../../MainArea/Button/Button";
export const ButtonDocs = () => {
  return (
    <div className="buttonDocs">
      <h1>Button</h1>
      <p>
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </p>
      <h3>Usage</h3>
      <div className="usage">
        <Button text="Button" />
      </div>
      <Gist id="9cce63fce14538aa8eebc55613455937" />

      <h3>Button Sizes</h3>
      <p>
        Use the <code>size</code> prop to change the size of the button. You can
        set the value to <code>xs</code>, <code>sm</code>, <code>md</code>, or{" "}
        <code>lg</code>.
      </p>
      <div className="usage">
        <Button text="Button" size="xs" />
        <Button text="Button" size="sm" />
        <Button text="Button" size="md" />
        <Button text="Button" size="lg" />
      </div>
      <Gist id="1940e4161360fa91f7c6e15a86945f9a" />

      <h3>Button Variants</h3>
      <p>
        Use the <code>variant</code> prop to change the visual style of the
        Button. You can set the value to <code>primary</code>,{" "}
        <code>secondary</code>, <code>ghost</code>, <code>underline</code>,{" "}
        <code>primaryToSecondary</code>, <code>secondaryToPrimary</code>.
      </p>

      <div className="usage make-flex">
        <Button variant="primary" text="Button" />
        <Button variant="secondary" text="Button" />
        <Button variant="ghost" text="Button" />
        <Button variant="underline" text="Button" />
        <Button variant="primaryToSecondary" text="Button" />
        <Button variant="secondaryToPrimary" text="Button" />
      </div>
      <Gist id="d4a3c1f1f41812aed7a0b5771b2a29da" />

      <h3>Color Schemes</h3>
      <p>
        <code>colorScheme</code> prop is used to change the color scheme of the
        button of any variant. The default value is <code>light green</code>,
        which doesn't need to be passed. Other available option is{" "}
        <code>red</code>.
      </p>
      <p>
        <code>Note: </code> Only one color scheme, i.e. red is available as of
        now. More will be added soon.
      </p>

      <div className="usage make-flex">
        <Button variant="secondary" text="Button" />
        <Button colorScheme="red" variant="secondary" text="Button" />
      </div>
      <Gist id="3599ea27eb2868bf89074582c53e24ce" />

      <h3>Disable Buttons</h3>
      <p>
        <code>isDisabled</code> prop is used to disable the button. Possible
        values for this prop is true or false. The default value is{" "}
        <code>false</code>.
      </p>
      <div className="usage make-flex">
        <Button isDisabled="true" text="Button" />
        <Button variant="secondary" isDisabled="true" text="Button" />
      </div>
      <Gist id="c11aafa00efbf0b44c1a3fe5eaf6ca13" />
      <h3>Button with Icon</h3>
      <p>
        You can add left and right icons to the Button component using the{" "}
        <code>leftIcon</code> and <code>rightIcon</code> props respectively.
      </p>
      <div class="usage make-flex">
        <Button leftIcon={<HiOutlineMail />} text="Email" />
        <Button
          rightIcon={<MdNavigateNext />}
          text="Next"
          variant="secondary"
        />
      </div>
      <Gist id="1837a0e69a94e8253b9d079af502b1eb" />
      <h3>Social Buttons</h3>
      <p>
        We've included the colors for common social media platforms, and you can
        simply use their buttons via the <code>colorScheme</code> prop.
      </p>
      <div className="usage make-flex">
        <Button leftIcon={<FaFacebook />} colorScheme="fb" text="Facebook" />
        <Button leftIcon={<FaTwitter />} colorScheme="twitter" text="Twitter" />
      </div>
      <Gist id="04b7711de27fd76c3cfd1f2f7565c09c" />
      <p>
        The Social Media Buttons can have variants and different sizes as well.
      </p>
      <div className="usage make-flex">
        <Button
          leftIcon={<FaFacebook />}
          colorScheme="fb"
          variant="secondary"
          text="Facebook"
        />
        <Button
          leftIcon={<FaTwitter />}
          colorScheme="twitter"
          variant="ghost"
          text="Twitter"
        />
      </div>
      <Gist id="9f9fe43b38382e1bf6fb1d9b42f1da80" />
      <h3>Rounded Buttons</h3>
      <p>
        <code>borderRadius</code> prop can be used to set the border radius of
        the buttons. It can take up 4 values - <code>b1, b2, b3, full</code>.
        The default value of this prop is <code>b1</code>.
      </p>
      <div className="usage make-flex">
        <Button
          text="Twitter"
          leftIcon={<FaTwitter />}
          borderRadius="b1"
          colorScheme="twitter"
        />
        <Button
          text="Twitter"
          leftIcon={<FaTwitter />}
          borderRadius="b2"
          colorScheme="twitter"
        />
        <Button
          text="Twitter"
          leftIcon={<FaTwitter />}
          borderRadius="b3"
          colorScheme="twitter"
        />
        <Button
          leftIcon={<FaTwitter />}
          borderRadius="full"
          colorScheme="twitter"
        />
      </div>
      <Gist id="a0e364ecb11bf202d38f170bbbf2d7a9" />
    </div>
  );
};
