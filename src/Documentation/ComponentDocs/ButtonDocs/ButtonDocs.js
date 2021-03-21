import "./ButtonDocs.css";
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
      <div className="wrapper">
        <iframe
          title="button-code-usage"
          src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CButton%2520text%253D%2522Button%2522%2520%252F%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

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
      <div className="wrapper">
        <iframe
          title="button-size"
          src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%253CButton%2520text%253D%2522Button%2522%2520size%253D%2522xs%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520text%253D%2522Button%2522%2520size%253D%2522sm%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520text%253D%2522Button%2522%2520size%253D%2522md%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520text%253D%2522Button%2522%2520size%253D%2522lg%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

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
      <div className="wrapper">
        <iframe
          title="button-variants"
          src="https://carbon.now.sh/embed?bg=rgba%28152%2C251%2C152%2C1%29&t=3024-night&wt=none&l=javascript&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522primary%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522secondary%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522ghost%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522underline%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522primaryToSecondary%2522%2520%252F%253E%250A%2520%2520%2520%253CButton%2520variant%253D%2522secondaryToPrimary%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

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
      <h3>Social Buttons</h3>
      <p>
        We've included the colors for common social media platforms, and you can
        simply use their buttons via the <code>colorScheme</code> prop.
      </p>
      <div className="usage make-flex">
        <Button leftIcon={<FaFacebook />} colorScheme="fb" text="Facebook" />
        <Button leftIcon={<FaTwitter />} colorScheme="twitter" text="Twitter" />
      </div>
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
    </div>
  );
};
