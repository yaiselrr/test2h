<template>
    <div id="app">
        <div class="row mb-2">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Agregar datos de Persona</h4>
                    </div>
                    <form id="product-form" class="card-body" @submit.prevent="createPerson">
                        <div class="form-group">
                            <input type="text" v-model="name" id="name" name="name" class="form-control"
                                placeholder="Nombre">
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="lastname" id="lastname" name="lastname" class="form-control"
                                placeholder="Apellidos">
                        </div>
                        <div class="form-group">
                            <input type="number" v-model="age" step="0.01" name="price" id="price" class="form-control"
                                placeholder="Edad">
                        </div>
                        <div class="form-group">
                            <div class="select is-fullwidth is-medium is-rounded">
                                <select v-model="sex" class="form-control">
                                    <option disabled :value="null">Elija la cantidad de entradas</option>
                                    <option :value="1">Masculino</option>
                                    <option :value="2">Femenino</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="email" id="email" name="email" class="form-control"
                                placeholder="Correo">
                        </div>
                        <input type="submit" value="Guardar" class="btn btn-primary btn-block">
                    </form>

                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-7">
                <div class="table-responsive" id="tablashow">
                    <table class="table table-sm table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Sexo</th>
                                <th scope="col">Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in persons" :key="item.id" :item="item">
                                <td>{{ item.name }}</td>
                                <td>{{ item.lastname }}</td>
                                <td>{{ item.age }}</td>
                                <td>{{ item.sex }}</td>
                                <td>{{ item.email }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <p class="title">Cantidad Masculino: {{ countMasculino }}</p>
                        <p class="title">Cantidad Femenino: {{ countFemenino }}</p>
                        <p class="title">Edad Promedio: {{ edadPromedio }}</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'formulario',
    data() {
        return {
            name: null,
            lastname: null,
            age: null,
            sex: null,
            email: null,
            persons: [],
            naciol: null
        };
    },
    computed: {
        countMasculino() {
            return this.persons.filter(x => x.sex != 2).length;
        },
        countFemenino() {
            return this.persons.filter(x => x.sex == 2).length;
        },
        edadPromedio() {
            var cont = 0;
            if (this.persons.length == 0) {
                return 0;
            }
            if (this.persons.length == 1) {
                return this.persons[0].age;
            }
            for (let index = 0; index < this.persons.length; index++) {
                cont += parseFloat(this.persons[index].age);
            }

            return cont / this.persons.length;
        }
    },
    components: {},
    methods: {
        createPerson() {
            let person = {
                name: this.name,
                lastname: this.lastname,
                age: this.age,
                sex: this.sex,
                email: this.email,
            };
            this.persons.push(person);
            this.name = null;
            this.lastname = null;
            this.age = null;
            this.sex = null;
            this.email = null;

            console.log(this.persons);
        },
        nacionalidad() {
            this.$services.singleService.nacionalidad(this.naciol).then((r) => {
                console.log(r);
            });
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
