
import { 
  Create,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateDeal(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="startdate" variant="outlined"   />
<ReferenceInput label="cart" source="cartid" reference="cart">
        <AutocompleteInput variant="outlined" /* optionText="cart"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
