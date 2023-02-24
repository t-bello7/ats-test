import { Box } from "@mui/system";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

type formProps = {
    question: string
}

export const UploadImage = (props: formProps) => {
    const { question } = props
    return (
    <Box> 
    <FileUploadOutlinedIcon />
    {question}
    <input type="file"/>    
    </Box>
)};

export const ShortAnswer = (props: formProps)  => {
    const { question } = props
    return(
    <Box> 
        {question} 
        <input type="question"/>    
    </Box>
)};


export const Choice = (props: formProps)  => {
    const { question } = props
    return (
    <Box>
        {question}
    </Box>
)}


export const Paragraph = (props: formProps)  => {
    const { question } = props
    return (
    <Box>
        {question}
        <textarea>
            
        </textarea>
    </Box>
)}

export const DropDown = (props: formProps)  => {
    const { question } = props
    return (
    <Box> 
        {question}
        <select>
            <option value="helo"> hello</option>
        </select>
    </Box>
)};

export const Date = (props: formProps) => {
    const {question} = props
    return ( 
    <Box>
        {question}
        <input type="date"/>
    </Box>
)};

export const NumberQuestion = (props: formProps) => {
    const {question} = props
    return ( 
        <Box>
            {question}
            <input type="number"/>
        </Box>
    )};
    

