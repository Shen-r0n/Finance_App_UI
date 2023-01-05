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
            },
            {
              id: 5,
              to: "Shion Crest",
              date: "2022-05-22",
              amount: -2000,
            },
            {
              id: 6,
              to: "Eddy Crest",
              date: "2022-05-22",
              amount: 34000,
            },
            {
              id: 7,
              to: "kayo Crest",
              date: "2022-05-22",
              amount: 2300,
            },
           
            {
              id: 8,
              to: "sage Crest",
              date: "2022-05-22",
              amount: -2300,
            },
           
          ],
    },
    getters:{
        getTransaction(state){
            return state.transactions
        }
    },
    actions:{
        addtransaction(context:any ,data:any){
            context.state.transactions=context.state.transactions.push(data);
            return context.state.transactions;
        }
        // tocall:- store.dispatch("addtransaction")
    }
    
    
})