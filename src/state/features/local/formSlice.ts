import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    value: { 
            coverImg: {
                questions:  Array<{
                question: string,
                answer: string,
                name: string,
                questionType: string
                hide: boolean | null }>
            },
            personalInfo: {
                questions:  Array<{
                question: string,
                answer: string,
                name: string,
                questionType: string
                hide: boolean | null }>
            },
            profile: {
                questions:  Array<{
                question: string,
                answer: string,
                name: string,
                questionType: string
                hide: boolean | null }>
            },
            addQues: {
                questions:  Array<{
                question: string,
                answer: string,
                name: string,
                questionType: string
                hide: boolean | null }>
            }
    }
}
const initialState : FormState = {
    value: {
        coverImg: {
                questions: [{
                question: "coverImg",
                answer: "",
                questionType: "upload",
                name: "coverImage",
                hide: null
            }]
        },
        personalInfo: {
                    questions: [{
                    answer: "",
                    question: "First Name",
                    questionType: "shortAnswer",
                    name: 'firstName',
                    hide: null
                },
                {
                    question: "Last Name",
                    answer: "",
                    questionType: "shortAnswer",
                    name: 'lastName',
                    hide: null
                },{
                    question: "Email",
                    answer: "",
                    questionType: "shortAnswer",
                    name: "emailId",
                    hide: null
                },{
                    question: "Phone (without dial code)",
                    answer: "",
                    questionType: "shortAnswer",
                    name: "phoneNumber",
                    hide: false
                },{
                    question: "Nationality",
                    answer: "",
                    questionType: "dropDown",
                    name: "nationality",
                    hide: false
                },{
                    question: "Current Residence",
                    answer: "",
                    questionType: "paragraph",
                    name: "currentResidence",
                    hide: false
                },{
                    question: "ID Number",
                    questionType: "number",
                    answer: "",
                    name: "idNumber",
                    hide: false
                },{
                    question: "Date of Birth",
                    questionType: "date",
                    answer: "",
                    name: "dateOfBirth",
                    hide: false
                },{
                    question: "Gender",
                    questionType: "dropDown",
                    answer: "",
                    name: "gender",
                    hide: false
                }
            ]
        },  
        profile: {
               questions: [{
                question: "Education",
                questionType: "shortAnswer",
                answer: "",
                name: "education",
                hide: false
            },{
                question: "Experience",
                questionType: "paragraph",
                answer: "",
                name: "experience",
                hide: false
            }
        ]
        },
        addQues: {
               questions: [{
                question: "Please tell me about yourself in less than 500 words",
                questionType: "paragraph",
                answer: "",
                hide: false,
                name: "hey"
            },
            {
                question: "Please select the year of graduation from the list below",
                questionType: "paragraph",
                answer: "",
                hide: false,
                name: "hey" 
            }
        ]
        }
    }
}
export const formSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {}
})

export default formSlice.reducer;