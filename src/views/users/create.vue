<template>
    <div class="container my-5">

        <ul v-if="Object.keys(this.errorList).length > 0"  class="alert alert-danger px-3" >
            <li v-for="error in this.errorList" :key="error"> {{ error[0] }}</li>
        </ul>


        <form>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" v-model="model.user.name" class="form-control" aria-describedby="emailHelp">

            </div>
            <div class="mb-3">
                <label class="form-label">Phone</label>
                <input type="tel" v-model="model.user.phone" class="form-control" aria-describedby="emailHelp">

            </div>

            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" v-model="model.user.email" class="form-control" aria-describedby="emailHelp">

            </div>

            <div class="mb-3">
                <label class="form-label">Gender</label>
                <div class="form-check">
                    <input class="form-check-input"  v-model="model.user.gender" type="radio" value="male" id="flexRadioDefault1">
                    <label class="form-check-label"  for="flexRadioDefault1">
                        Male
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input"  v-model="model.user.gender" type="radio" value="female" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                       Female
                    </label>
                    </div>



            </div>


            <div class="mb-3">
                <label class="form-label">Profile picture</label>
                <input type="text" class="form-control" v-model="model.user.image">

            </div>



            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" v-model="model.user.password" class="form-control" id="exampleInputPassword1">
            </div>

            <button type="button" @click="userStore()" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import toastr from 'toastr';
export default {
    name: 'StudentCreate',
    data() {
        return {
            errorList :'',
            model: {
                user: {
                    name: '',
                    phone: '',
                    email: '',
                    gender: '',
                    image: '',
                    password: '',
                }
            }
        }
    },
    mounted() {
        
    },
    methods: {
        
        userStore(){
            var mythis = this;
          
            axios.post('http://127.0.0.1:8000/api/users', this.model.user)
            .then(response =>{
                toastr.success('User created successfully');

                this.model.user.name = '';
                this.model.user.phone = '';
                this.model.user.email = '';
                this.model.user.gender = '';
                this.model.user.image = '';
                this.model.user.password = '';

             
                 mythis.errorList='';
               
            }).catch(error =>{
                mythis.errorList = error.response.data.errors;
                toastr.error(error.response.data.message);
                
            })
        }
    }


}
</script>