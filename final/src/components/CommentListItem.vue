<template>
  <li class="comment-list-item" style="float: left;">
    <router-link :to="{ name: 'profile', params: { username: comment.user.username } }"
    style="text-decoration: none; color: inherit;"
    >
      <b-avatar variant="info" :src="url + comment.user.profile_img"></b-avatar>
      {{ comment.user.username }}
    </router-link>: 
    
    <span v-if="!isEditing">{{ comment.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <b-icon icon="x-lg" @click="switchIsEditing"></b-icon> | 
      <b-icon icon="check-lg" @click="onUpdate"></b-icon>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <b-icon icon="pen" class="ms-3" @click="switchIsEditing"></b-icon> |
      <b-icon icon="trash-fill" @click="deleteComment(payload)"></b-icon>
    </span>
  </li>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name:'CommentListItem',
  props:{
    comment:Object
  },
  data() {
    return {
      url : "http://127.0.0.1:8000",
      isEditing: false,
      payload: {
        moviePk: this.comment.movie,
        commentPk : this.comment.pk,
        content : this.comment.content
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
    
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },
 
}
</script>

<style>

</style>