import { configureStore} from '@reduxjs/toolkit'
import calculateReducer from '../calculate/calculateSlice'
export default configureStore({
    reducer: {
        calculate:calculateReducer
    }
})
