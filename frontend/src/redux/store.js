import { configureStore } from '@reduxjs/toolkit'
import userslice from './UserSlice/userslice'
import formslice from './FormSlice/formslice'
import questslice from './QuestSlice/questslice'

export const store = configureStore({
  reducer: {
   user:userslice,
   form:formslice,
   quest:questslice
  },
})
