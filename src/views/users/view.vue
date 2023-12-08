<template>
    <div class="container">
        <div class="p-2 rounded">
            <div class="">
                <RouterLink to="/user/create" class="btn btn-primary btn-sm float-end">
                    Add User
                </RouterLink>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">image</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-if="users.length > 0">
                <tr v-for="(user, index ) in users" :key="user.id">

                    <th scope="row">{{ index+1 }}</th>


                    <td>{{ user.name }}</td>
                    <td> {{ user.phone }} </td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.gender }}</td>
                    <td>
                        <img :src="user.image" width="50" height="50" />
                    </td>
                    <td>
                        <RouterLink :to="`/user/${user.id}/edit/`" type="button"  class="btn btn-primary btn-sm">Edit</RouterLink>
                        <button type="button" @click="deleteUser(user.id)" class="btn btn-danger btn-sm">Delete</button>
                    </td>

                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="7" class="text-center">Loading...</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>



<script>

import axios from 'axios'
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            users: []
        };
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            axios.get('http://127.0.0.1:8000/api/users')
                .then(response => {
                this.users = response.data.users;
            })
                .catch(function (error) {
            });
        }, 
        deleteUser(id) {

            if(confirm("Are you sure you want to delete this user?")){
                axios.delete(`http://127.0.0.1:8000/api/users/${id}`)
                .then(response => {
                    this.getUsers();
                    toastr.success(response.data.message);
                })
                .catch(function (error) {
                    toastr.error(error.response.data.message);
                })
            }
            
        }
    },
    components: { RouterLink }
}

</script>