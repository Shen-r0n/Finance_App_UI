import { createStore } from "vuex";

export default createStore({
    state:{
        transactions: [
            {
              id: 1,
              to: "Shenron Crest",
              date: "2022-05-22",
              amount: 5000,
            },
            {
              id: 2,
              to: "loerem Crest",
              date: "2022-05-22",
              amount: 5000,
            },
            {
              id: 3,
              to: "logan Crest",
              date: "2022-05-22",
              amount: -1000,
            },
            {
              id: 4,
              to: "Rukia Crest",
              date: "2022-05-22",
              amount: -2000,
            }
          ],
    },
    getters:{
        getTransaction(state){
            return state.transactions
        }
    },
    actions:{
        
    }
    
    
})