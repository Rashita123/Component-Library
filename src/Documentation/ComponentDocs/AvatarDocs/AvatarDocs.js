import { Avatar } from "../../../MainArea/Avatar/Avatar";
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
      <div className="wrapper">
        <iframe
          title="avatar-usage"
          src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=3024-night&wt=none&l=javascript&ds=false&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CAvatar%2520src%253D%2522https%253A%252F%252Fbit.ly%252F3f5KrFn%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CAvatar%2520src%253D%2522https%253A%252F%252Fbit.ly%252F3c4LwLJ%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CAvatar%2520src%253D%2522https%253A%252F%252Fbit.ly%252F3qZAJqc%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <p>
        <code>size</code> prop can be used to set the size of your avatars.
        Possible values are: <code>xs, sm, md, lg, xlg, xxlg</code>. The default
        value is: <code>lg</code>
      </p>
      <div className="usage make-flex">
        <Avatar
          size="xs"
          src="https://images.unsplash.com/photo-1612041714878-997e3fe9cd13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=809&q=80"
        />
        <Avatar
          size="sm"
          src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          size="md"
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fGZhY2V8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1612041714878-997e3fe9cd13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=809&q=80"
        />
        <Avatar
          size="xlg"
          src="https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar
          size="xxlg"
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fGZhY2V8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>

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
    </div>
  );
};
