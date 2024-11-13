import { List,  Datagrid, TextField, EmailField,ReferenceField, EditButton } from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid rowClick={false} >
        <TextField source="id" />
+           <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);
