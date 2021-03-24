import "./ListDocs.css";
import Gist from "react-gist";
import { List, ListItem } from "../../../MainArea/List/List";
export const ListDocs = () => {
  return (
    <div>
      <h1>Lists</h1>
      <p>
        We can have three types of Lists using the<code> type </code>prop. The
        default value is <code>unordered</code>.
      </p>
      <div className="usage">
        <List type="unordered">
          <ListItem>This is first List Item</ListItem>
          <ListItem>This is second List Item</ListItem>
          <ListItem>This is third List Item</ListItem>
        </List>
      </div>
      <Gist id="3d7b77ebc01b75e5bc8231fc6cbfc9b6" />
      <div className="usage">
        <List type="ordered">
          <ListItem>This is first List Item</ListItem>
          <ListItem>This is second List Item</ListItem>
          <ListItem>This is third List Item</ListItem>
        </List>
      </div>
      <Gist id="3513d0df3d8e8e54a857b6c1293e0806" />
      <div className="usage">
        <List type="no-bullet">
          <ListItem>This is first List Item</ListItem>
          <ListItem>This is second List Item</ListItem>
          <ListItem>This is third List Item</ListItem>
        </List>
      </div>
      <Gist id="5b245be8c17d76cebdf226fa8c607084" />
    </div>
  );
};
