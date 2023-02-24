import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import Box  from "@mui/material/Box";
import type { RootState } from "../../state/store";
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
    const formTypeQuestions = useSelector((state: RootState) => state.form.value)
    
    switch (formInfo) {
        case 'coverImg':
            return (<Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "10px",
           }}> 
                {
                    formTypeQuestions[formInfo].questions.map((element) => (
                        <div key={uuidv4()}>
                            {
                                {
                                'upload': <UploadImage question={element.question} />,
                                'shortAnswer': <ShortAnswer question={element.question} />,
                                'paragraph': <Paragraph question={element.question} />,
                                'dropDown': <DropDown question={element.question} />,
                                'number': <NumberQuestion question={element.question} />,
                                'date': <Date question={element.question} />,
                                'choice': <Choice question={element.question} />
                                }[element.questionType]
                            }
                        </div>
                    ))
                }
            </Box>)
        case 'personalInfo': 
            return (<Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "10px",
            }}> 
                   {
                    formTypeQuestions[formInfo].questions.map((element) => (
                        <div key={uuidv4()}>
                            {
                                {
                                'upload': <UploadImage question={element.question} />,
                                'shortAnswer': <ShortAnswer question={element.question} />,
                                'paragraph': <Paragraph question={element.question} />,
                                'dropDown': <DropDown question={element.question} />,
                                'number': <NumberQuestion question={element.question} />,
                                'date': <Date question={element.question} />,
                                'choice': <Choice question={element.question} />
                                }[element.questionType]
                            }
                        </div>
                    ))
                }
            </Box>)
        case 'addQues': 
            return (<Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "10px",
            }}> 
                 {
                    formTypeQuestions[formInfo].questions.map((element) => (
                        <div key={uuidv4()}>
                            {
                                {
                                'upload': <UploadImage question={element.question} />,
                                'shortAnswer': <ShortAnswer question={element.question} />,
                                'paragraph': <Paragraph question={element.question} />,
                                'dropDown': <DropDown question={element.question} />,
                                'number': <NumberQuestion question={element.question} />,
                                'date': <Date question={element.question} />,
                                'choice': <Choice question={element.question} />
                                }[element.questionType]
                            }
                        </div>
                    ))
                }
            </Box>)
        case 'profile': 
           return (<Box sx={{
               display: "flex",
               flexDirection: "column",
               paddingInline: "10px",
           }}> 
                {
                    formTypeQuestions[formInfo].questions.map((element) => (
                        <div key={uuidv4()}>
                            {
                                {
                                'upload': <UploadImage question={element.question} />,
                                'shortAnswer': <ShortAnswer question={element.question} />,
                                'paragraph': <Paragraph question={element.question} />,
                                'dropDown': <DropDown question={element.question} />,
                                'number': <NumberQuestion question={element.question} />,
                                'date': <Date question={element.question} />,
                                'choice': <Choice question={element.question} />
                                }[element.questionType]
                            }
                        </div>
                    ))
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