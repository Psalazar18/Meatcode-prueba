<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="mr-auto mt-5">
            <img src="../assets/images/logo.svg" alt="logo">
          </div>
          <div class="ml-auto mt-5">
              <img class="mr-2" src="../assets/images/facebook-icon.svg" alt="facebook icon" id="fb">
              <img class="mr-2" src="../assets/images/instagram-icon.svg" alt="instagram icon" id="ig">
              <img src="../assets/images/youtube-icon.svg" alt="youtube icon" id="yt">
          </div>
        </div>
          <div class="col-6">
            <div>
              <img class="shape" src="../assets/images/hero-shape.png" alt="shape">
            </div>
            <div style="position: absolute;">
              <h1>El secreto de tu cocina</h1>
            </div>
        </div>
      </div>
    </header>

    <main>
      <h2 class="text-center">Nuestros artículos</h2>
      <div>
        <img class="shape-center" src="../assets/images/heading-shape.png" alt="shape">
      </div>
      <div class="container">
        <div class= "row">
          <b-list-group class="col-3 list">
            <b-list-group-item class="todos">TODOS <img class="todos arrow " src="../assets/images/arrow.svg" alt="arrow"></b-list-group-item>
            <b-list-group-item>PRODUCTOS</b-list-group-item>
            <b-list-group-item>RECETAS</b-list-group-item>
            <b-list-group-item>CONSEJOS</b-list-group-item>
          </b-list-group>
          <div class="container cards">
            <div class="row">
              <b-card-group v-for="(item,index) in articulos" :key="index" deck class="col-4 mt-3" >
                <b-card 
                :title="item.title" :img-src="item.image" img-alt="Image" img-top style="max-width: 270px;">
                  <b-card-text>
                  {{item.content}}
                  </b-card-text>
                </b-card>
              </b-card-group>
            </div>
          </div>
        </div>
      </div>
    </main>

    <section>
      <h2 class="text-center">Contáctanos</h2>
      <div class="text-center">
        <img class="shape-center2" src="../assets/images/heading-shape.png" alt="shape">
      </div>
      <form @submit.prevent="submit" class="container">
        <div class="row">
          <div class=" group-input1">
            <label for="NOMBRE">NOMBRE</label>
            <input type="text" name="NOMBRE" v-model="form.firstname" required>

            <label class="mt-3" for="MAIL">MAIL</label>
            <input type="email" name="MAIL" v-model="form.email" required>
          </div>

          <div  class="col-3 group-input2">
            <label for="APELLIDO">APELLIDO</label>
            <input type="text" name="APELLIDO" v-model="form.lastname" required>

            <label class="mt-3" for="TELEFONO">TELÉFONO</label>
            <input type="text" name="TELEFONO" v-model="form.phone" required>
          </div>
        </div>
          <button type="submit" class="submit rounded-pill mt-5 mx-auto ml-auto">ENVIAR</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from "vuex";
export default {
  name: 'Landingpage',
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    ...mapActions(['getArticulos']),
    submit(){
      if(this.form.firstname != '' && typeof this.form.firstname == "string"
       && typeof this.form.lastname == "string" && this.form.lastname !='' 
       && this.form.mail !=''
       && this.form.phone != ''){
        axios.post('https://5eed24da4cbc340016330f0d.mockapi.io/api/subscribe', this.form).then((res) => {
          console.log(res)
          })
          .catch((error) => {
            console.log(error)
        })
          this.form.firstname = '',
          this.form.lastname = '',
          this.form.email = '',
          this.form.phone = ''
      }else{
        alert('Debe completar los campos')
      }
    },
  },
  computed: {
    ...mapState(['articulos'])
  },
  created() {
    this.getArticulos();
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Open+Sans&display=swap');
body{
  font-family: 'Open Sans', sans-serif;
}
h1{
  font-family: 'Caveat', cursive;
  font-size: 130px;
  margin-top: 100px;
}
h2{
  font-family: 'Caveat', cursive;
  font-size: 80px;
  margin-top: 100px;
}
.todos{
  color: #D8AD3D;
  
}
.arrow{
 margin-left: 9em !important;
}
.shape{
  position: absolute;
  margin-top: 300px;
  width: 250%;
  margin-left: -117%;
  display: block;
}
.shape-center{
  margin-top: -48px;
  margin-left: 24%;
}
.shape-center2{
  margin-top: -48px;
  margin-left: -5%;
}
.header{
  background-image: url('../assets/images/hero-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
	background-position:center;
	height: 805px;
}
.list{
  height: 100%;
}
.cards{
  margin-left: 24%;
  margin-top: -19%;
}
.button{
  border-radius: 50%;
  border: 1px solid;
  padding-left: 5px;
}
#yt{
  border: 3px solid #D8AD3D;
  border-radius: 50%;
  padding: 1em 0.7em;
}
#ig{
  border: 3px solid #B72C2C;
  border-radius: 50%;
  padding: 0.8em 0.7em;
}
#fb{
  border: 3px solid #009CD9;
  border-radius: 50%;
  padding: 0.7em 0.9em;
}
input,label{
  display: block;
}
.group-input1{
  margin-right: 2em;
  margin-left: 14em;
}
input{
  border: 1px solid #3F454A;
  width: 350px;
  height: 50px;
}
input:focus{
  border: 5px solid #D8AD3D;
}
label{
  font-weight: bold;
  font-size: 13px;
}
.submit{
  background-color:#D8AD3D;
  display: block;
  color: white;
  font-weight: bold;
  border: none;
  width: 170px;
  height: 55px;
  margin-right: 9em !important;
}
.submit:hover{
  background-color:#009CD9;
}
</style>
