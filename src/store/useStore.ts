import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

export interface selected {
    questionNumber: number,
    value: number
}

interface variant {
    value: number,
    label: string
}

interface correctVariant {
    questionNumber: number,
    value: number,
}

export interface question {
    name: string
    questionNumber: number,
    allQuestions: number,
    description: string,
    variants: variant[]
}

export interface quiz {
    id: number,
    name: string,
    image: string,
    deadline: string,
    duration: number,
    point: number,
    attempt: string,
    allQuestions: number,
    questions: question[]
    correctVariants: correctVariant[],

}

interface IState {
    user: {email: string, password: string},
    isLogin: boolean,
    setIsLogin: (isLogin: boolean) => void,
    setSeconds: (second: number) => void,
    second: number,
    setIsRunning: (isRunning:boolean) => void,
    isRunning: boolean,
    duration: number,
    setDuration: (duration: number) => void,
    quiz: quiz[],
    selected: selected[],
    setSelected: ({questionNumber, value}:selected) => void,
    setSelectedEmpty: () => void,
}


export const useStore = create<IState>()((set) => ({
    user: {email: 'usr@tana.com', password: 'password'},
    quiz: [
        {
        id: 1,
        name: 'History',
        image: '/history.png',
        deadline: '28/07/2024',
        duration: 300,
        point: 230,
        attempt: 'once',
        allQuestions: 5,
        questions: [
            {
                name: "History",
                questionNumber: 1,
                allQuestions: 5,
                description: "Guy Bailey, Roy Hackett, and Paul Stephenson made history in 1963, as part of a protest against a bus company that refused to employ black and Asian drivers in which UK city?",
                variants: [
                    {
                        value: 1,
                        label: "London"
                    },
                    {
                        value: 2,
                        label: "Edinburgh"
                    },
                    {
                        value: 3,
                        label: "Liverpool"
                    },
                    {
                        value: 4,
                        label: "Bristol"
                    }
                ]
            },
            {
                name: "History",
                questionNumber: 2,
                allQuestions: 5,
                description: "Which treaty ended the Thirty Years' War in 1648?",
                variants: [
                    {
                        value: 1,
                        label: "Treaty of Versailles"
                    },
                    {
                        value: 2,
                        label: "Treaty of Westphalia"
                    },
                    {
                        value: 3,
                        label: "Treaty of Paris"
                    },
                    {
                        value: 4,
                        label: "Treaty of Utrecht"
                    }
                ]
            },
            {
                name: "History",
                questionNumber: 3,
                allQuestions: 5,
                description: "Who was the first President of the United States?",
                variants: [
                    {
                        value: 1,
                        label: "George Washington"
                    },
                    {
                        value: 2,
                        label: "Thomas Jefferson"
                    },
                    {
                        value: 3,
                        label: "John Adams"
                    },
                    {
                        value: 4,
                        label: "James Madison"
                    }
                ]
            },
            {
                name: "History",
                questionNumber: 4,
                allQuestions: 5,
                description: "Which event is often considered the spark that started World War I?",
                variants: [
                    {
                        value: 1,
                        label: "The assassination of Archduke Franz Ferdinand"
                    },
                    {
                        value: 2,
                        label: "The sinking of the Lusitania"
                    },
                    {
                        value: 3,
                        label: "The invasion of Belgium"
                    },
                    {
                        value: 4,
                        label: "The Zimmerman Telegram"
                    }
                ]
            },
            {
                name: "History",
                questionNumber: 5,
                allQuestions: 5,
                description: "The Great Fire of London occurred in which year?",
                variants: [
                    {
                        value: 1,
                        label: "1666"
                    },
                    {
                        value: 2,
                        label: "1566"
                    },
                    {
                        value: 3,
                        label: "1766"
                    },
                    {
                        value: 4,
                        label: "1866"
                    }
                ]
            }
        ],
        correctVariants: [
            {
                questionNumber: 1,
                value: 4
            },
            {
                questionNumber: 2,
                value: 2
            },
            {
                questionNumber: 3,
                value: 1
            },
            {
                questionNumber: 4,
                value: 1
            },
            {
                questionNumber: 5,
                value: 1
            }
        ]
    },
        {
            id: 2,
            name: "Medicine",
            image: "/med.png",
            deadline: "28/07/2024",
            duration: 180,
            point: 230,
            attempt: "once",
            allQuestions: 5,
            questions: [
                {
                    name: "Medicine",
                    questionNumber: 1,
                    allQuestions: 5,
                    description: "Who is credited with discovering penicillin?",
                    variants: [
                        {
                            value: 1,
                            label: "Alexander Fleming"
                        },
                        {
                            value: 2,
                            label: "Louis Pasteur"
                        },
                        {
                            value: 3,
                            label: "Marie Curie"
                        },
                        {
                            value: 4,
                            label: "Robert Koch"
                        }
                    ]
                },
                {
                    name: "Medicine",
                    questionNumber: 2,
                    allQuestions: 5,
                    description: "What is the scientific name for the 'windpipe'?",
                    variants: [
                        {
                            value: 1,
                            label: "Trachea"
                        },
                        {
                            value: 2,
                            label: "Bronchus"
                        },
                        {
                            value: 3,
                            label: "Esophagus"
                        },
                        {
                            value: 4,
                            label: "Larynx"
                        }
                    ]
                },
                {
                    name: "Medicine",
                    questionNumber: 3,
                    allQuestions: 5,
                    description: "Which vitamin is synthesized by the skin when exposed to sunlight?",
                    variants: [
                        {
                            value: 1,
                            label: "Vitamin C"
                        },
                        {
                            value: 2,
                            label: "Vitamin D"
                        },
                        {
                            value: 3,
                            label: "Vitamin E"
                        },
                        {
                            value: 4,
                            label: "Vitamin K"
                        }
                    ]
                },
                {
                    name: "Medicine",
                    questionNumber: 4,
                    allQuestions: 5,
                    description: "Which part of the brain is responsible for regulating basic bodily functions such as breathing and heart rate?",
                    variants: [
                        {
                            value: 1,
                            label: "Medulla oblongata"
                        },
                        {
                            value: 2,
                            label: "Cerebellum"
                        },
                        {
                            value: 3,
                            label: "Hypothalamus"
                        },
                        {
                            value: 4,
                            label: "Thalamus"
                        }
                    ]
                },
                {
                    name: "Medicine",
                    questionNumber: 5,
                    allQuestions: 5,
                    description: "What is the main function of insulin in the human body?",
                    variants: [
                        {
                            value: 1,
                            label: "Regulating blood sugar levels"
                        },
                        {
                            value: 2,
                            label: "Digesting food"
                        },
                        {
                            value: 3,
                            label: "Producing energy"
                        },
                        {
                            value: 4,
                            label: "Transporting oxygen"
                        }
                    ]
                }
            ],
            correctVariants: [
                {
                    questionNumber: 1,
                    value: 1
                },
                {
                    questionNumber: 2,
                    value: 1
                },
                {
                    questionNumber: 3,
                    value: 2
                },
                {
                    questionNumber: 4,
                    value: 1
                },
                {
                    questionNumber: 5,
                    value: 1
                }
            ]
        },
        {
            id: 3,
            name: "Agriculture",
            image: "/Agriculture.png",
            deadline: "28/07/2024",
            duration: 120,
            point: 230,
            attempt: "once",
            allQuestions: 5,
            questions: [
                {
                    name: "Agriculture",
                    questionNumber: 1,
                    allQuestions: 5,
                    description: "Which gas is essential for photosynthesis?",
                    variants: [
                        {
                            value: 1,
                            label: "Oxygen"
                        },
                        {
                            value: 2,
                            label: "Carbon dioxide"
                        },
                        {
                            value: 3,
                            label: "Nitrogen"
                        },
                        {
                            value: 4,
                            label: "Hydrogen"
                        }
                    ]
                },
                {
                    name: "Agriculture",
                    questionNumber: 2,
                    allQuestions: 5,
                    description: "What is the process of breeding animals or plants to have certain desired traits called?",
                    variants: [
                        {
                            value: 1,
                            label: "Hybridization"
                        },
                        {
                            value: 2,
                            label: "Cross-pollination"
                        },
                        {
                            value: 3,
                            label: "Selection"
                        },
                        {
                            value: 4,
                            label: "Grafting"
                        }
                    ]
                },
                {
                    name: "Agriculture",
                    questionNumber: 3,
                    allQuestions: 5,
                    description: "What is the main component of organic fertilizers?",
                    variants: [
                        {
                            value: 1,
                            label: "Synthetic chemicals"
                        },
                        {
                            value: 2,
                            label: "Minerals"
                        },
                        {
                            value: 3,
                            label: "Plant and animal matter"
                        },
                        {
                            value: 4,
                            label: "Pesticides"
                        }
                    ]
                },
                {
                    name: "Agriculture",
                    questionNumber: 4,
                    allQuestions: 5,
                    description: "Which crop is known as the 'golden grain'?",
                    variants: [
                        {
                            value: 1,
                            label: "Wheat"
                        },
                        {
                            value: 2,
                            label: "Corn"
                        },
                        {
                            value: 3,
                            label: "Rice"
                        },
                        {
                            value: 4,
                            label: "Barley"
                        }
                    ]
                },
                {
                    name: "Agriculture",
                    questionNumber: 5,
                    allQuestions: 5,
                    description: "What is the term for the practice of rotating crops to improve soil fertility?",
                    variants: [
                        {
                            value: 1,
                            label: "Crop rotation"
                        },
                        {
                            value: 2,
                            label: "Fallowing"
                        },
                        {
                            value: 3,
                            label: "Monoculture"
                        },
                        {
                            value: 4,
                            label: "Terracing"
                        }
                    ]
                }
            ],
            correctVariants: [
                {
                    questionNumber: 1,
                    value: 2
                },
                {
                    questionNumber: 2,
                    value: 3
                },
                {
                    questionNumber: 3,
                    value: 3
                },
                {
                    questionNumber: 4,
                    value: 1
                },
                {
                    questionNumber: 5,
                    value: 1
                }
            ]
        },
    ],
    isLogin: false,
    duration: 12,
    second: 120,
    setIsLogin: (isLogin: boolean) => set(() => ({isLogin: isLogin})),
    setSeconds: (second: number) => set(() => ({second: second})),
    setIsRunning: (isRunning: boolean) => set(() => ({isRunning: isRunning})),
    isRunning: true,
    setDuration: (duration) => set(() => ({duration: duration})),
    selected: [],
    setSelected: ({questionNumber, value}: selected) => set((state) => ({selected: [...state.selected.filter(element => element.questionNumber !== questionNumber), {questionNumber, value}]})),
    setSelectedEmpty: () => set(() => ({selected: []}))
}))