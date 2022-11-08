
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowProduct(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="name" />
<NumberField source="price" />
<ReferenceField source="cartid" reference="cart" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}