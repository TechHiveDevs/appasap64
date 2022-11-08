
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditDeal(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="startdate" variant="outlined"   />
<ReferenceInput label="cart" source="cartid" reference="cart">
        <AutocompleteInput variant="outlined" /* optionText="cart"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}