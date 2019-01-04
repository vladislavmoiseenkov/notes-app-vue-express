<template>
  <main>
    <v-layout justify-center>
      <v-flex xs12 md6>
        <note
          v-if="note"
          :note="note"
        />
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
import Note from '@/components/Note'
import NotesService from '@/services/NotesService'

export default {
  name: 'ViewNote',
  components: {
    Note
  },
  data () {
    return {
      note: null
    }
  },
  async mounted () {
    this.note = (await NotesService.getNoteById(this.$route.params.id)).data.note
  }
}
</script>

<style scoped>

</style>
