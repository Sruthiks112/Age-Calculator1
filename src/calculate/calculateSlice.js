import {createSlice} from '@reduxjs/toolkit'

export const calculateSlice = createSlice({
    name:'calculate',
    initialState:{
        age: null
    },
    reducers: {
        calculateAge:(state,action) => {
            const dob=action.payload;
            
            let monthstring;
            let month;
            let today = new Date(),
            dob1= new Date(dob),
            year= today.getFullYear() -  dob1.getFullYear(),
            dob1mon=dob1.getMonth(),
            todaymon=today.getMonth();

            if(year<0){
                monthstring=`enter vaild Dob`;
                state.age=monthstring;
            }

            else if( year >0 && year <=1){
              {todaymon>dob1mon? month=todaymon-dob1mon : month=0};
              
              state.age=month;
            }
            else{
            
                state.age=year;
           
            }

            
            
        }
    }

})

export const {calculateAge}=calculateSlice.actions
export default calculateSlice.reducer
