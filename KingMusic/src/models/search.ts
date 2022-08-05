export default {
    namespace: 'search',
    state: {
      history: [],
    },
    reducers: {
      save(state: any, {payload}) {
        const {keywords}= payload;
       let find= state.history.find((item:string)=>(item===keywords))
       if(!find && keywords){
        state.history=[...state.history,keywords]
        console.log("save方法触发了",state.history)
       }
       return state;
       
      }
    },    
}



