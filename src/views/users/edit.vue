<template>
    <div class="container my-5">
      <!-- Display errors if there are any -->
      <ul v-if="Object.keys(errorList).length > 0" class="alert alert-danger px-3">
        <li v-for="error in errorList" :key="error">{{ error[0] }}</li>
      </ul>
  
      <!-- User edit form -->
      <form>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" v-model="model.user.name" class="form-control" aria-describedby="emailHelp" />
        </div>
  
        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input type="tel" v-model="model.user.phone" :disabled="model.user.phone" class="form-control" aria-describedby="emailHelp" />
        </div>
  
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" v-model="model.user.email" :disabled="model.user.email" class="form-control" aria-describedby="emailHelp" disabled />
          <!-- Display the email as disabled since it's typically not editable in an edit form -->
        </div>
  
        <div class="mb-3">
          <label class="form-label">Gender</label>
          <div class="form-check">
            <input class="form-check-input" v-model="model.user.gender" :checked="model.user.gender === 'male'" type="radio" value="male" id="flexRadioDefault1" />

            <label class="form-check-label" for="flexRadioDefault1">Male</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" v-model="model.user.gender" :checked="model.user.gender === 'female'" type="radio" value="female" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">Female</label>
          </div>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Profile picture</label>
          <input type="text" class="form-control" v-model="model.user.image" />
        </div>
  
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" v-model="model.user.password" class="form-control" id="exampleInputPassword1" />
        </div>
  
        <button type="button" @click="userUpdate()" class="btn btn-primary">Update</button>
      </form>
    </div>
  </template>

<script>

import axios from 'axios';
import toastr from 'toastr';

export default {
    data() {
        return {
            errorList: '',
            model: {
                user: {
                    name: '',
                    phone: '',
                    email: '',
                    gender: '',
                    image: '',
                    password: ''
                }
            }
        }
    },
    mounted() {

        this.getUser();
       
    },
    methods: {
   
        getUser() {
            const userId = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/users/${userId}/edit`)
            .then((response) => {
                console.log(response.data.user);
                this.model.user = response.data.user;
             
            })
            .catch((error) => {
                toastr.warning(error.response.data.message);
            })
        },

        userUpdate(){

            const userId = this.$route.params.id;
            axios.put(`http://127.0.0.1:8000/api/users/${userId}`, this.model.user)
            .then((response) => {
                toastr.success(response.data.message);
               this.errorList = '';
               return this.$router.push('/users');
            })
            .catch((error) => {
                 // Handle errors, e.g., show a notification
          this.errorList = error.response.data.errors;
          toastr.error(error.response.data.message);
            })
        }

    }
}


</script>