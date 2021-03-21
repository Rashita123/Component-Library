import { Avatar } from "../../../MainArea/Avatar/Avatar";
import Gist from "react-gist";
export const AvatarDocs = () => {
  return (
    <div>
      <h1>Avatar</h1>
      <p>
        The Avatar component is used to represent a user, and displays the{" "}
        <code>profile picture</code>, <code>initials</code> or{" "}
        <code>fallback icon</code>.
      </p>
      <ul>
        <li>
          <p>
            If src of image is passed as prop, the <code>profile image</code>{" "}
            will be displayed
          </p>
        </li>
        <li>
          <p>
            If the image link provided is <code>broken</code> and name is passed
            as a prop, <code>initials</code> will be displayed
          </p>
        </li>
        <li>
          <p>
            <strong>Fallback Case</strong>: If none out of Image link or Name is
            passed, <code>Fallback Avatar</code> will be shown
          </p>
        </li>
      </ul>

      <div className="usage make-flex">
        <Avatar src="https://bit.ly/3f5KrFn" />
        <Avatar src="https://bit.ly/3c4LwLJ" />
        <Avatar src="https://bit.ly/3qZAJqc" />
      </div>
      <Gist id="8bcef539fe86468fc35099c06790b3b6" />
      <h3>Avatars of different Sizes</h3>
      <p>
        <code>size</code> prop can be used to set the size of your avatars.
        Possible values are: <code>xs, sm, md, lg, xlg, xxlg</code>. The default
        value is: <code>lg</code>
      </p>
      <div className="usage make-flex">
        <Avatar size="xs" src="https://bit.ly/3cQDipG" />
        <Avatar size="sm" src="https://bit.ly/2OMFBSI" />
        <Avatar size="md" src="https://bit.ly/314V1E8" />
        <Avatar size="lg" src="https://bit.ly/3cQDipG" />
        <Avatar size="xlg" src="https://bit.ly/2OMFBSI" />
        <Avatar size="xxlg" src="https://bit.ly/314V1E8" />
      </div>
      <Gist id="cbdf8e9da74aa3822308ed8537087278" />
      <h3>Avatar Fallbacks</h3>
      <p>
        If a broken Image link is passed as a prop, the initials of the name
        will become the avatar. If the name is also not present, the defaut
        avatar will be rendered.
      </p>
      <div className="usage make-flex">
        <Avatar name="Abraham Lincoln" src="https://bit.ly/broken-link" />
        <Avatar name="Williams Liam" src="https://bit.ly/broken-link" />
        <Avatar src="https://bit.ly/broken-link" />
      </div>
      <Gist id="02c399a91c81d6a02b7bbb41a64ef019" />
      <h3>Customize the Background Color of Fallback Avatars</h3>
      <p>
        <code>bgColor</code> prop is used to change the background color of the
        alphabet Initials avatar. Default value of Initials Avatar is
        <strong>light-green</strong>.
      </p>
      <p>
        <code>fallBackColor</code> prop is used to change the color of the
        fallback avatar. The default value is <strong>black</strong>.
      </p>
      <div className="usage make-flex">
        <Avatar name="Abraham Lincoln" bgColor="lightblue" />
        <Avatar fallBackColor="salmon" />
      </div>
      <Gist id="7f664b0aa6142ec3cf93c54a1bbe0d8a" />
    </div>
  );
};
