const {createApp}= Vue;
createApp({
    data(){
        
        return{
            toAdd:'',
            Tasks:[],   
        }
    },
    methods:{
        addTask(){
            const newTask={
                task : this.toAdd,
                isDone : false,
            }
            this.Tasks.push(newTask);
        },
        removeTask(i){
            this.Tasks.splice(i,1);
        },
        markDone(i){
            console.log(this.Task[i].task)
            //if(this.Tasks[i].isDone== false){
              //  alert('haifhie')
            //}
        }
    }
}).mount('#app');