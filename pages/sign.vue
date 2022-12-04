<template>
  <div id="sign-page">
    <div class="background">
      <img src="~assets/images/sign_background.png" />
    </div>

    <div class="alerts">
      <AlertArea ref="alertArea" />
    </div>

    <main>
      <form
        v-if="mode === 'sign-in'"
        id="sign-in-form"
      >
        <div>
          <span class="logo">4b</span>
          <h2>Login into your account</h2>
        </div>
        
        <div>
          <div class="mb-3 field">
            <label for="email" class="form-label">Email Address</label>
            <input id="email" type="email" class="form-control" placeholder="alex@email.com">
          </div>

          <div class="mb-3 field">
            <label for="password" class="form-label">Password</label>
            <input  id="password" type="password" class="form-control" placeholder="password">
          </div>

          <a class="forgot-password" href="#" @click="setMode('find-pw')">Forgot Password?</a>
        </div>

        <div class="d-grid">
          <button type="button" class="btn btn-primary">Log in Now</button>
          <div class="line-label">OR</div>
          <button type="button" class="btn btn-outline-dark" @click="setMode('sign-up')">Sign up Now</button>
        </div>
      </form>

      <form
        v-if="mode === 'sign-up'"
        id="sign-up-form"
      >
        <div>
          <span class="logo">4b</span>
          <h2>Make new account</h2>
        </div>
        
        <div>
          <div class="mb-3 field">
            <label for="username" class="form-label">Username</label>
            <input id="username" type="text" class="form-control" placeholder="username" required>
            <div class="invalid-feedback">정확한 값을 입력해 주세요!</div>
          </div>

          <div class="mb-3 field">
            <label for="email" class="form-label">Email Address</label>
            <input id="email" type="email" class="form-control" placeholder="alex@email.com" required>
            <div class="invalid-feedback">정확한 값을 입력해 주세요!</div>
          </div>

          <div class="mb-3 field">
            <label for="password" class="form-label">Password</label>
            <input  id="password" type="password" class="form-control" placeholder="password" required>
            <div class="invalid-feedback">정확한 값을 입력해 주세요!</div>
          </div>
        </div>

        <div class="d-grid">
          <button type="button" class="btn btn-success" @click="signUp">Sign Up!</button>
          <div class="line-label">OR</div>
          <button type="button" class="btn btn-outline-dark" @click="setMode('sign-in')">Back to Sign In</button>
        </div>
      </form>

      <form
        v-if="mode === 'find-pw'"
        id="find-pw-form"
      >
        <div>
          <span class="logo">4b</span>
          <h2>Reset the Password</h2>
        </div>
        
        <div>
          <div class="mb-3 field">
            <label for="email" class="form-label">Email Address</label>
            <input id="email" type="email" class="form-control" placeholder="alex@email.com">
          </div>
        </div>

        <div class="d-grid">
          <button type="button" class="btn btn-danger">Reset the Password</button>
          <div class="line-label">OR</div>
          <button type="button" class="btn btn-outline-dark" @click="setMode('sign-in')">Back to Sign In</button>
        </div>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  data () {
    return {
      mode: 'sign-in'
    }
  },
  methods: {
    setMode (mode: string) {
      const forms = document.getElementsByTagName('form');
      for (let i = 0; i < forms.length; i++) {
        forms[i].classList.remove('was-validated');
      }

      this.mode = mode;
    },
    signUp(_event: any) {
      const signUpForm = document.getElementById('sign-up-form') as HTMLFormElement;

      if (!signUpForm.checkValidity()) {
        signUpForm.classList.add('was-validated');
        return undefined;
      }

      const fields = ['username', 'email', 'password'];
      const data: any = {};
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      };

      for (const fieldName of fields) {
        const field = document.getElementById(fieldName) as HTMLInputElement;
        data[fieldName] = field!.value;
      }

      const alertArea: any = this.$refs.alertArea;

      axios
        .post('/api/user', data, config)
        .then((response) => {
          if (response.data.success) {
            alertArea.addAlert('회원 가입 성공!', 'primary', 'bi-info-circle-fill');
            this.setMode('sign-in');

            for (const fieldName of fields) {
              const field = document.getElementById(fieldName) as HTMLInputElement;
              field.value = '';
            }
          } else {
            alertArea.addAlert(`회원 가입에 실패했습니다! (${response.data.message})`, 'danger', 'bi-exclamation-triangle-fill');
          }
        });

      return undefined;
    }
  },
})
</script>

<style scoped>
  @keyframes slide-in-main {
    from { transform: translateX(-100%); }
    80% { transform: translateX(5%); }
    to { transform: translateX(0); }
  }

  @keyframes fade-in-background {
    from { background-color: white; }
    to { background-color: rgb(241, 243, 246); }
  }

  #sign-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: white;
  }

  .background {
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    box-sizing: content-box;
    align-items: center;
    justify-content: center;
    background-color: white;
    animation: fade-in-background 1s forwards 500ms;
  }

  .background > img {
    width: 60%;
    padding-left: 30%;
  }

  .alerts {
    width: 500px;
    height: 80%;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .logo {
    font-family: 'Fondamento', cursive;
    font-weight: bold;
    font-style: italic;
    font-size: 40px;
  }

  h2 {
    font-size: 25px;
  }

  main {
    width: 40%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;
    border-radius: 50px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

    transform: translateX(-100%);
    animation: slide-in-main 1s forwards 500ms;
  }

  main > form {
    width: 90%;
    max-width: 400px;
    height: 90%;
    max-height: 800px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  main > form .field {
    text-align: left;
  }

  main > form .forgot-password {
    float: right;
  }

  .line-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
    color: lightgray;
  }

  .line-label:before {
    content: ' ';
    width: 100%;
    display: block;
    border-top: 1px solid lightgray;
    margin-right: 20px;
  }

  .line-label:after {
    content: ' ';
    width: 100%;
    display: block;
    border-top: 1px solid lightgray;
    margin-left: 20px;
  }
</style>