<template>

  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card>
        <v-card-text>
          <v-text-field
            v-model="searchString"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Search Movie"
            placeholder="Avengers"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click="searchMovie">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/MovieList/' + this.searchString)
      this.searchString = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>

