import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormQuestions from "./FormQuestions";

type FormContainerProps = {
    headerText: string,
    formInfo: string,
    isEditable: boolean | false
};

const FormContainer = (props : FormContainerProps) => {
    const {headerText, formInfo, isEditable} = props
    return <Paper sx={{
        width: "300px", 
        minHeight: "30vh",
        borderRadius:"20px",
        boxShadow: "3px 3px 14px rgba(190, 190, 190, 0.3)",
    }}> 
        <Typography sx={{
            fontSize: 25,
            borderRadius: "20px 20px 0 0",
            backgroundColor: "secondary.main",  
            padding: "14px",
            fontWeight: 600
            }}>
                {headerText}
        </Typography>
  
            {
                {
                'coverImg': <FormQuestions formInfo={formInfo} />,
                'personalInfo': <FormQuestions formInfo={formInfo} />,
                'profile': <FormQuestions formInfo={formInfo} />,
                'addQues': <FormQuestions formInfo={formInfo} />
                }[formInfo]
            }
      { isEditable ? (
        <Button variant="outlined" startIcon={<AddOutlinedIcon />}>
            Add a question
        </Button>
      ): ""
      
      }
     </Paper>
}

export default FormContainer;