
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowCart(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<ReferenceField source="userid" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}