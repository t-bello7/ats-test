import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    value: { 
            coverImg: {
                questions:  Array<{
                question: string,
                questionType: string
                hide: boolean | null }>
            },
            personalInfo: {
                questions:  Array<{
                question: string,
                questionType: string
                hide: boolean | null }>
            },
            profile: {
                questions:  Array<{
                question: string,
                questionType: string
                hide: boolean | null }>
            },
            addQues: {
                questions:  Array<{
                question: string,
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
                questionType: "upload",
                hide: null
            }]
        },
        personalInfo: {
                    questions: [{
                    question: "First Name",
                    questionType: "shortAnswer",
                    hide: null
                },
                {
                    question: "Last Name",
                    questionType: "shortAnswer",
                    hide: null
                },{
                    question: "Email",
                    questionType: "shortAnswer",
                    hide: null
                },{
                    question: "Phone (without dial code)",
                    questionType: "shortAnswer",
                    hide: false
                },{
                    question: "Nationality",
                    questionType: "dropDown",
                    hide: false
                },{
                    question: "Current Residence",
                    questionType: "paragraph",
                    hide: false
                },{
                    question: "ID Number",
                    questionType: "number",
                    hide: false
                },{
                    question: "Date of Birth",
                    questionType: "date",
                    hide: false
                },{
                    question: "Gender",
                    questionType: "dropDown",
                    hide: false
                }
            ]
        },  
        profile: {
               questions: [{
                question: "Education",
                questionType: "shortAnswer",
                hide: false
            },{
                question: "Experience",
                questionType: "paragraph",
                hide: false
            }
        ]
        },
        addQues: {
               questions: [{
                question: "Please tell me about yourself in less than 500 words",
                questionType: "paragraph",
                hide: false
            },
            {
                question: "Please select the year of graduation from the list below",
                questionType: "paragraph",
                hide: false  
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