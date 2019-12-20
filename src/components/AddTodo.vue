<template>
    <div> 
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name: "AddTodo",
    props: ["todos"],
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(event){
            event.preventDefault();
            if (this.title !== '') {
                const item = {
                    id: uuid.v4(),
                    title: this.title,
                    completed: false
                }
                // Send up to app
                this.$emit('add-todo', item);
                this.title = '';
            }
        }
    }
    
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"]{
        flex: 10;
        padding: 5px;
    }

    input[type="submit"]{
        flex: 2
    }
</style>