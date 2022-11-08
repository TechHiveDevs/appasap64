
import { 
  Edit,
  SimpleForm,
  
TextInput,
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditProduct(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined"   />
<NumberInput source="price" variant="outlined"  />
<ReferenceInput label="cart" source="cartid" reference="cart">
        <AutocompleteInput variant="outlined" /* optionText="cart"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}