<template>
  <main>
    <v-layout justify-center>
      <v-flex md6>
        <form
          @submit.prevent="save"
          autocomplete="off">
          <v-text-field
            label="Title"
            v-model="note.title"
            :rules="[required]"
            required
          ></v-text-field>
          <br>
          <v-text-field
            label="Description"
            type="text"
            v-model="note.description"
            :rules="[required]"
            required
          ></v-text-field>
          <v-btn
            type="submit"
            dark
            class="cyan"
          >
            Save
          </v-btn>
        </form>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>
import NotesService from '@/services/NotesService'
import { mapGetters } from 'vuex'

export default {
  name: 'Note',
  data () {
    return {
      note: {
        title: '',
        description: ''
      },
      required: (value) => !!value || 'Required.'
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser'
    })
  },
  mounted () {
    if (!this.user) {
      this.$router.replace({ name: 'login' })
    } else {
      if (this.$route.name === 'edit-note') {
        let id = this.$route.params.id
        this.getNotesById(id)
      }
    }
  },
  methods: {
    async save () {
      if (this.note.title.trim().length > 0 && this.note.description.trim().length > 0) {
        switch (this.$route.name) {
          case 'create-note':
            const newNote = (await NotesService.create({
              title: this.note.title,
              description: this.note.description,
              user_id: this.user.id
            })).data.note
            if (newNote) {
              this.$router.push({ name: 'notes' })
            }
            break
          case 'edit-note':
            const editedNote = (await NotesService.edit({ note: { ...this.note } })).data.note
            if (editedNote) {
              this.$router.push({ name: 'notes' })
            }
            break
        }
      }
    },
    async getNotesById (id) {
      try {
        this.note = { ...(await NotesService.getNoteById(id)).data.note }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
