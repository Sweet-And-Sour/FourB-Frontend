<template>
  <div id="reset-password-page">
    <form id="reset-pw-form" @keydown.enter="keydownEnterEvent">
        <div>
          <span class="logo">4b</span>
          <h2>Reset the Password</h2>
        </div>
        
        <div>
          <div class="mb-3 field">
            <label for="username" class="form-label">Username</label>
            <input id="username" type="username" class="form-control" placeholder="username" required>
            <div class="invalid-feedback">정확한 값을 입력해 주세요!</div>
          </div>

          <div class="mb-3 field">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" class="form-control" placeholder="password" required>
            <div class="invalid-feedback">정확한 값을 입력해 주세요!</div>
          </div>

          <div class="mb-3 field">
            <label for="password-confirm" class="form-label">Password Confirm</label>
            <input id="password-confirm" type="password" class="form-control" placeholder="password confirm" required>
            <div class="invalid-feedback">정확한 값을 입력해 주세요!</div>
          </div>
        </div>

        <div class="d-grid">
          <button type="button" class="btn btn-danger" @click="requestResetPassword">Reset the Password</button>
          <div class="line-label">OR</div>
          <a type="button" class="btn btn-outline-dark" data-mode="sign-in" href="/sign">Back to Sign In</a>
        </div>
      </form>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  methods: {
    keydownEnterEvent(event: any) {
      event.preventDefault();

      this.requestResetPassword({});

      return undefined;
    },
    getFormData(formId: string, fields: string[]) {
      const form = document.getElementById(formId) as HTMLFormElement;

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return undefined;
      }

      const data: any = {};

      for (const fieldName of fields) {
        const field = document.getElementById(fieldName) as HTMLInputElement;
        data[fieldName] = field!.value;
      }

      return data;
    },
    resetFields(formId: string) {
      const form = document.getElementById(formId) as HTMLElement;
      const inputs = form.getElementsByTagName('input');

      for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = '';
      }
    },
    requestResetPassword(_event: any) {
      const data = this.getFormData('reset-pw-form', ['username', 'password', 'password-confirm']);
      
      if (data === undefined) {
        return undefined;
      } else if (data.password !== data['password-confirm']) {
        alert('비밀번호와 비밀번호 확인란이 서로 다릅니다!');
        return undefined;
      }

      delete data['password-confirm'];
      data.token = this.$route.query.token;

      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      };

      axios
        .post('/api/user/reset', data, config)
        .then((response) => {
          if (response.data.success) {
            alert('패스워드가 변경되었습니다!');
            this.resetFields('reset-pw-form');
            window.close();
          } else {
            alert('오류발생! (패스워드를 초기화할 수 없습니다.)');
          }
        });

      return undefined;
    }
  }
})
</script>

<style scoped>
  .logo {
    font-family: 'Fondamento', cursive;
    font-weight: bold;
    font-style: italic;
    font-size: 40px;
  }

  h2 {
    font-size: 25px;
  }

  #reset-password-page > form {
    width: 90%;
    max-width: 400px;
    height: 90%;
    max-height: 800px;

    margin: 40px auto;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #reset-password-page > form > div {
    margin: 40px 0;
  }

  #reset-password-page > form .field {
    text-align: left;
  }

  #reset-password-page > form .forgot-password {
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
