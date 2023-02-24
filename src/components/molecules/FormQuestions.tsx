import { ChangeEvent } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import Box  from "@mui/material/Box";
import type { RootState } from "../../state/store";
import { useAppDispatch } from '../../state/store';
import {
    ShortAnswer,
    UploadImage,
    Choice,
    Paragraph,
    DropDown,
    Date, 
    NumberQuestion
} from "../atoms";


type FormQuestionsProps = {
    formInfo: string
};

const FormQuestions = (props: FormQuestionsProps) => {
    const {formInfo} = props
    const dispatch = useAppDispatch()
    const formTypeQuestions = useSelector((state: RootState) => state.form.value)
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { target } = e;
    }
    // console.log(data)
    switch (formInfo) {
        case 'coverImg':
            return (<Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "10px",
           }}> 
                {
                    formTypeQuestions[formInfo].questions.map((element) => {
                        return(
                        <div key={uuidv4()}>
                            {
                                {
                                'upload': <UploadImage question={element.question} name={element.name} handleChange={handleChange}/>,
                                'shortAnswer': <ShortAnswer question={element.question} name={element.name} handleChange={handleChange}/>,
                                'paragraph': <Paragraph question={element.question} />,
                                'dropDown': <DropDown question={element.question} />,
                                'number': <NumberQuestion question={element.question} />,
                                'date': <Date question={element.question} />,
                                'choice': <Choice question={element.question} />
                                }[element.questionType]
                            }
                        </div>
                    )})
                }
            </Box>)
        case 'personalInfo': 
            return (<Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "10px",
            }}> 
                   {
                    formTypeQuestions[formInfo].questions.map((element) => {
                        return(
                        <div key={uuidv4()}>
                            {
                                {
                                'upload': <UploadImage  question={element.question} name={element.name} handleChange={handleChange} />,
                                'shortAnswer': <ShortAnswer question={element.question} name={element.name} handleChange={handleChange} />,
                                'paragraph': <Paragraph question={element.question} />,
                                'dropDown': <DropDown question={element.question} />,
                                'number': <NumberQuestion question={element.question} />,
                                'date': <Date question={element.question} />,
                                'choice': <Choice question={element.question} />
                                }[element.questionType]
                            }
                        </div>
                    )
                })
                }
            </Box>)
        case 'addQues': 
            return (<Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "10px",
            }}> 
                 {
                    formTypeQuestions[formInfo].questions.map((element) => {
                        return(
                        <div key={uuidv4()}>
                            {
                                {
                                'upload': <UploadImage question={element.question} name={element.question} handleChange={handleChange} />,
                                'shortAnswer': <ShortAnswer question={element.question} name={element.question} handleChange={handleChange}/>,
                                'paragraph': <Paragraph question={element.question} />,
                                'dropDown': <DropDown question={element.question} />,
                                'number': <NumberQuestion question={element.question} />,
                                'date': <Date question={element.question} />,
                                'choice': <Choice question={element.question} />
                                }[element.questionType]
                            }
                        </div>
                    )
                })
                }
            </Box>)
        case 'profile': 
           return (<Box sx={{
               display: "flex",
               flexDirection: "column",
               paddingInline: "10px",
           }}> 
                {
                    formTypeQuestions[formInfo].questions.map((element) => {
                        return(
                        <div key={uuidv4()}>
                            {
                                {
                                'upload': <UploadImage question={element.question} name={element.question} handleChange={handleChange} />,
                                'shortAnswer': <ShortAnswer question={element.question} name={element.question} handleChange={handleChange} />,
                                'paragraph': <Paragraph question={element.question} />,
                                'dropDown': <DropDown question={element.question} />,
                                'number': <NumberQuestion question={element.question} />,
                                'date': <Date question={element.question} />,
                                'choice': <Choice question={element.question} />
                                }[element.questionType]
                            }
                        </div>
                    )})
                }
           </Box>)

        default:
            return (<Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "10px",
            }}> prer</Box>)
        }
};

export default FormQuestions;