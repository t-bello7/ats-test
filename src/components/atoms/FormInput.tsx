import { useEffect, useState, ChangeEvent, Dispatch } from "react";
import { Box } from "@mui/system";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

type formProps = {
    question: string,
}

type uploadProps = {
    question: string,
    name: string,
    defaultValue?: string
    // onNewValue: (name: string, e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    onNewValue?: (args: { name: string; value: string | number }) => void;
}

export const UploadImage = (props: uploadProps) => {
    const { question,
            name,
            onNewValue,
        } = props

    const [value, setValue] = useState("") as [
        string,
        Dispatch<React.SetStateAction<string>>
        ];
    
    useEffect(() => {
        if (onNewValue) onNewValue({ name, value });
    }, [value]);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    
    return (
    <Box> 
        <FileUploadOutlinedIcon />
        {question}
        <input name={name} type="file" value={value} onChange={handleChange}/>    
    </Box>
)};

export const ShortAnswer = (props: uploadProps)  => {
    const { question,
            onNewValue,
            name } = props

    const [value, setValue] = useState("") as [
        string,
        Dispatch<React.SetStateAction<string>>
    ];
    
    useEffect(() => {
        if (onNewValue) onNewValue({ name, value });
    }, [value]);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return(
    <Box> 
        {question} 
        <input
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
        />    
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
    

