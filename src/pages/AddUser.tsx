import { Box } from '@mui/material';
import FormContainer from '../components/molecules/FormContainer';

const AddUser = () => {
    return(<Box display="flex" sx={{ flexDirection:"column", gap:"67px", alignItems:"center" }}>
                <FormContainer headerText="Upload cover image" formInfo="coverImg" isEditable={false} /> 
                <FormContainer headerText="Personal Information" formInfo="personalInfo" isEditable={true} /> 
                <FormContainer headerText="Profile" formInfo="profile" isEditable={true}/> 
                <FormContainer headerText="Additional questions" formInfo="addQues" isEditable={true}/> 
           </Box>)
}

export default AddUser;