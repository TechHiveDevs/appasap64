
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowDeal(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="startdate" />
<ReferenceField source="cartid" reference="cart" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}