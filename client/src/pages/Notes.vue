<template>
  <main>
    <v-layout justify-center row>
      <note
        v-for="(note, index) in notesInfo.notes"
        :key="index"
        :note="note"
        v-if="notesInfo.notes && notesInfo.notes.length > 0"
      />
    </v-layout>
    <v-layout justify-center row>
      <v-flex xs12 md3>
        <v-pagination
          v-model="page"
          :length="notesInfo.count / per_page"
        ></v-pagination>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import config from '@/config'
import Note from '@/components/Note'

export default {
  name: 'Notes',
  components: {Note},
  data () {
    return {
      page: 1,
      per_page: config.limit
    }
  },
  computed: {
    ...mapGetters({
      notesInfo: 'notes/getNotes',
      user: 'auth/getUser'
    })
  },
  watch: {
    async page (val, oldVal) {
      if (val !== oldVal) {
        await this.setNotes(val)
      }
    }
  },
  async mounted () {
    try {
      await this.setNotes(1)
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    ...mapActions({
      setNotes: 'notes/setNotes'
    })
  }
}
</script>

<style scoped>

</style>
