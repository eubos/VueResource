<template>
<div class="container pt-2" >
  <div class="form-group">
    <label for="name">Car name
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </label>
  </div>
  <div class="form-group">
    <label for="year">Car name
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </label>
  </div>
<button class="btn btn-success" @click="createCar">Create car</button>
<button class="btn btn-primary" @click="loadCars">Load cars</button>
<hr>
<ul class="list-group">
  <li class="list-group-item"
  v-for="car in cars" :key="car.id">
  <strong>{{car.name }}</strong> - {{ car.year}}</li>
</ul>
</div>
</template>

<script>
export default{
  data(){
    return{
      carName: '',
      carYear: 2019,
      cars: [],
      resource: null
    }
  },
  methods: {
    createCar(){
      const car = {
        name: this.carName,
        year: this.carYear
      }

    //стандартный через $http
    //  this.$http.post('cars', car)
    //     .then(response=>{
    //       return response.json()
    //     })
    //     .then(newCar => {
    //       console.log(newCar)
    //     })


    //через сущность resource
    this.resource.save({}, car)
    },
    loadCars(){

      //стандартный через $http
      // this.$http.get('cars')
      //   .then(response=>{
      //     return response.json()
      //   })
      //   .then(cars => {
      //     this.cars = cars
      //   })

      //через сущность resource
    this.resource.get().then(response=>{
        return response.json()
    }).then(cars=>{this.cars = cars})
    }
  },
  //определение resource
  created(){
    this.resource = this.$resource('cars')// рут прописан в main.js
  }
}
</script>

<style scoped>

</style>
