import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { UserList } from "./components/UserList";
import {PostList} from "./components/PostList";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
     
         <Resource name="users" list={UserList} show={ShowGuesser}  />
  </Admin>
);
