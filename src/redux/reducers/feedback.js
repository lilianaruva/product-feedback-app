import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedFeedback:{},
  feedbacks: [
    {
      id: 1,
      title: "Q&A within the challenge hubs",
      detail: "Challenge-specific Q&A would make for easy reference.",
      category: "Feature",
      status: "Planned",
      vote: "65",
      comment: [
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
        {
          user:"Lily",
          username:"@lily_ruva",
          comment:"idk"
        }
      ]
    },
    {
      id: 2,
      title: "Add tags for solutions",
      detail: "Easier to search for solutions based on a specific stack.",
      category: "Enhancement",
      status: "Planned",
      vote: "112",
      comment: [
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
        {
          user:"Lily",
          username:"@lily_ruva",
          comment:"idk"
        },
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
        {
          user:"Lily",
          username:"@lily_ruva",
          comment:"idk"
        }
      ]
    },
    {
      id:3,
      title: "Allow image/video upload to feedback",
      detail: "Images and screencasts can enhance comments on solutions.",
      category: "UI",
      status: "Live",
      vote: "51",
      comment: [
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
        {
          user:"Lily",
          username:"@lily_ruva",
          comment:"idk"
        },
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
        {
          user:"Lily",
          username:"@lily_ruva",
          comment:"idk"
        },
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
        {
          user:"Lily",
          username:"@lily_ruva",
          comment:"idk"
        }
      ]
    },
    {
      id: 4,
      title: "Preview images not loading",
      detail: "Challenge preview images are missing when you apply a filter.",
      category: "Bug",
      status: "Live",
      vote: "3",
      comment: [
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
        {
          user:"Lily",
          username:"@lily_ruva",
          comment:"idk"
        }
      ]
    },
    {
      id: 5,
      title: "Add a dark theme option",
      detail:
        "It would help people with light sensitivities and who prefer dark mode.",
      category: "Feature",
      status: "In-Progress",
      vote: "99",
      comment: [
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
      ]
    },
    {
      id: 6,
      title: "Ability to follow others",
      detail: "Stay updated on comments and solutions other people post.",
      category: "UX",
      status: "Planned",
      vote: "42",
      comment: [
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
        {
          user:"Lily",
          username:"@lily_ruva",
          comment:"idk"
        },
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        },
      ]
    }
  ],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeSelectedFeedback: (state, action) => {
      state.selectedFeedback = action.payload.selectedFeedback;
    },
    changeData : (state,action) =>{
        state.feedbacks = action.payload.feedbacks
    },
    addFeedback : (state,action) =>{
        state.feedbacks.push(action.payload.feedback)
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const rdxfeedbackactions = counterSlice.actions

export default counterSlice.reducer