// import router from "@/router"
// import account from "@/api/account"

import drf from '@/api/drf'
import axios from 'axios'

export default {
  state:{
    
  },
  getters:{
    
  },
  mutations:{

  },
  actions:{


    login ({dispatch}, credentials) {
      axios({
        url: drf.accounts.login(),
        method: 'post',
        data: credentials
      })
      .then(res => {
        console.log(res.data.key)
        dispatch('saveToken', res)
      }
      )
      
    }
  }
}