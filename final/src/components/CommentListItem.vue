<template>
  <li class="comment-list-item">
    <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>: 
    
    <span v-if="!isEditing">{{ comment.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="comment.content">
      <button @click="onUpdate">Update</button> |
      <button @click="switchIsEditing">Cancel</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button @click="switchIsEditing">Edit</button> |
      <button @click="deleteComment(comment)">Delete</button>
    </span>
  </li>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name:'CommentListItem',
  data() {
    return {
      isEditing: false,
      
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  props:{
    comment:Object
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      console.log(this.comment)
      this.updateComment(this.comment)
      this.isEditing = false
    }
  },
 
}
</script>

<style>

</style>