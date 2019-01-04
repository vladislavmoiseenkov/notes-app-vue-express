<template>
  <v-flex md12 class="px-2">
    <v-card class="mb-2" id="note">
      <v-card-title class="cyan white--text" style="position:relative; max-height: 64px;">
        <span
          @click="goTo(note.id)"
          class="headline title"
        >
          {{ note.title }}
        </span>

        <v-spacer></v-spacer>

        <v-menu
          data-app
          offset-y fixed
          v-if="user && user.id === note.User.id"
        >
          <v-btn
            slot="activator"
            dark
            icon
          >
            <v-icon>more_vert</v-icon>
          </v-btn>

          <v-list>
            <v-list-tile
              v-for="(actionName, i) in actions"
              :key="i"
              @click="action(actionName.title)"
            >
              <v-list-tile-title>{{ actionName.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-card-title>

      <v-card-text>{{ note.description }}</v-card-text>
      <v-card-actions>
        <v-card-text>{{ note.User.username }}</v-card-text>
        <v-card-text>{{ $moment(note.created_at).format('DD-MM-YYYY') }}</v-card-text>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import NotesService from '@/services/NotesService'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Note',
  props: {
    note: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      actions: [
        {
          title: 'Edit'
        },
        {
          title: 'Remove'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser'
    })
  },
  methods: {
    ...mapActions({
      setNotes: 'notes/setNotes'
    }),
    async action (name) {
      switch (name) {
        case 'Edit':
          this.$router.push({ name: 'edit-note', params: { id: this.note.id } })
          break
        case 'Remove':
          const note = (await NotesService.deleteNote({ ...this.note })).data.note
          if (note) {
            await this.setNotes()
          }
          break
      }
    },
    goTo (id) {
      this.$router.push({ name: 'view-note', params: { id: id } })
    }
  }
}
</script>

<style scoped>
  .title {
    cursor: pointer;
  }
</style>
