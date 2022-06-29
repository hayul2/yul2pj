<template>
<!-- 테스트버튼 코드 -->
<!--  <h1>-->
<!--    <router-link to="/signupone">회원가입 페이지</router-link>-->
<!--  </h1>-->
<!--  <h1>-->
<!--    <router-link to="/Login">로그인 페이지</router-link>-->
<!--  </h1>-->
<!--  <h1>-->
<!--    <router-link to="/dbshow" class="animate__tada">dbshow</router-link>-->
<!--  </h1>-->
<!--  <h1><a href="/main">메인 페이지</a></h1>-->
<!--  <button @click="getCategories">카테고리 테스트</button>-->
<!--  <br>-->
<!--  <span>서버상태 : {{ servStat }}</span>-->

  <router-view></router-view>

</template>
<script>
import axios from 'axios'
import store from './store'

import { mapState } from 'vuex'
import xeicon from './assets/XEIcon-2.2.0/xeicon.min.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bundle from 'bootstrap/dist/js/bootstrap.bundle.js'

// ==========animate=========
import animate from 'animate.css'

//   this.$props.
export default {
  data () {
    return {
      servStat: 'offline',
      // logCheck : false,s
    }
  },
  components: {},
  methods: {


    delPhoto (biznum) {
      axios({
        url: '/api/delPhoto',
        method: 'post',
        data: { 'biznum': biznum }
      }).then(res => {
        console.log(res.data)
      })
    },

    servCheck: async function () {
      console.log("체크기 실행")
      try {
        const res = await axios.get('/status/check')
        if (res.status == 200) {
          this.servStat = 'online'
        } else {
          this.servStat = 'offline'
        }
      } catch (e) {
        console.log(e)
      }

    }
  },
  created () {

  },

  mounted () {

    store.dispatch('loginStore/doReadStateFromStorage')

    // setInterval(this.servCheck, 3000)
    this.servCheck()
  },
//   computed: {
//   iconUrl () {
//     return require('./assets/img/logo.png')
// }
//   }
}
</script>

<style scoped>
ul {
  list-style: none;
}

.container {
  width: 100%;
  padding: 10px 15px;
}

.nav {
  float: left;
  background: #dcd4e3;
  padding: 0 15px;
  margin: 0 30px;
}

.nav-item {
  text-align: center;
  padding: 15px 0;
}

.nav-item > .xi-cloud-o {
  border: 1px dashed #c6a6e2;
  border-radius: 100%;
  padding: 5px;
  color: #fff;
}

.nav-link {
  color: #997fb5;
  text-decoration: none;
}
.nav-link:first-child {
  background:('../assets/img/logo.png')
}

.nav-link:hover {
  color: #997fb5;
  text-decoration: none;
}

/* media query */
@media ( min-width: 768px) {
  .container {
    width: 100%;
    padding: 30px 15px;
  }

  .nav {
    float: left;
    background: #dcd4e3;
  }

  .nav-item {
    text-align: center;
    padding: 15px 0;
  }

  .nav-item > .xi-cloud-o {
    border: 1px dashed #c6a6e2;
    border-radius: 100%;
    padding: 5px;
    color: #fff;
  }

  .nav-link {
    color: #997fb5;
    text-decoration: none;
    font-size: 10px;
  }

  .nav-link:hover {
    color: #997fb5;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

}

@media ( min-width: 992px) {
  .container {
    width: 100%;
    padding: 30px 15px;
  }

  .nav {
    float: left;
    background: #dcd4e3;
  }

  .nav-item {
    text-align: center;
    padding: 15px 0;
  }

  .nav-item > .xi-cloud-o {
    border: 1px dashed #c6a6e2;
    border-radius: 100%;
    padding: 5px;
    color: #fff;
  }

  .nav-link {
    color: #997fb5;
    text-decoration: none;
    font-size: 14px;
  }

  .nav-link:hover {
    color: #997fb5;
    text-decoration: none;
  }
}

@media ( min-width: 1200px) {
  .container {
    width: 100%;
    padding: 30px 15px;
  }

  .nav {
    float: left;
    background: #dcd4e3;
  }

  .nav-item {
    text-align: center;
    padding: 15px 0;
  }

  .nav-item > .xi-cloud-o {
    border: 1px dashed #c6a6e2;
    border-radius: 100%;
    padding: 5px;
    color: #fff;
  }

  .nav-link {
    color: #997fb5;
    text-decoration: none;
    font-size: 16px;
  }

  .nav-link:hover {
    color: #997fb5;
    text-decoration: none;
  }
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  z-index: 9999;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
