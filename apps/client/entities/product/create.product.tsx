
import { 
  Create,
  SimpleForm,
  
TextInput,
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateProduct(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined"   />
<NumberInput source="price" variant="outlined"  />
<ReferenceInput label="cart" source="cartid" reference="cart">
        <AutocompleteInput variant="outlined" /* optionText="cart"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
