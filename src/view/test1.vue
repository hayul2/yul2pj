<template>
  <div class="w-32 h-32 border-2 border-dotted border-blue-500">
    <div v-if="images"
         class="w-full h-full flex items-center">
      <img :src="images" alt="image">
    </div>
      <input ref="image" id="input"
             type="file" name="image" accept="image/*" multiple="multiple"
             class="hidden"
             >
             <button @click="uploadImage()">사업자등록증 전송</button>
  </div>
</template>

<script>
import axios from 'axios'


  export default {
    data: ()=>({
      images: ''
    }),
    methods: {
      uploadImage() {
        let form = new FormData()
        let image = this.$refs['image'].files[0]

        form.append('image', image)

        axios.post('/api/upload', form, {
          header: { 'Content-Type': 'multipart/form-data' }
        }).then( ({data}) => {
          this.images = data
          console.log(data)
        })
            .catch( err => console.log(err))
      },
    }
}

</script>

<style>

</style>
