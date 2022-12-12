<template>
  <div id="profile-edit-page">
    <GlobalNavigationBar :is-auth-page="true" />

    <content>
      <div class="background" :style="`background-image: url(${profile.backgroundImage});`">
        <button>Change Background Image</button>
      </div>

      <div class="avatar" :style="`background-image: url(${profile.avatarImage});`">
        <button class="btn btn-secondary"><i class="bi bi-emoji-smile"></i></button>
      </div>

      <div id="profile-form">
        <div class="mb-3">
          <label for="username-input" class="form-label">Username</label>
          <input id="username-input" v-model="profile.username" type="text" class="form-control" aria-describedby="emailHelp" disabled>
          <div id="emailHelp" class="form-text">사용자 이름은 변경할 수 없습니다.</div>
        </div>

        <div class="mb-3">
          <label for="email-input" class="form-label">Email address</label>
          <input id="email-input" v-model="profile.email" type="email" class="form-control" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">이메일 주소를 입력해 주세요.</div>
        </div>

        <div class="mb-3">
          <label for="password-input" class="form-label">Password</label>
          <input id="password-input" v-model="profile.password" type="password" class="form-control">
          <div id="emailHelp" class="form-text">패스워드를 입력해 주세요. (최소 길이 8자 이상, 특수기호 포함)</div>
        </div>

        <div class="mb-3">
          <label for="bio-input" class="form-label">Bio Messages</label>
          <textarea id="bio-input" v-model="profile.bio" class="form-control" rows="3"></textarea>
          <div id="emailHelp" class="form-text">다른 사람들에게 자기자신을 소개해 보세요!</div>
        </div>

        <div class="mb-3">
          <label for="field-input" class="form-label">Fields</label>
          <input id="field-input" v-model="profile.field" type="text" class="form-control">
          <div id="emailHelp" class="form-text">어떤 분야에서 활동하고 계신가요? (콤마 ","로 구분해 주세요)</div>
        </div>

        <label for="basic-url" class="form-label">Website Address</label>
        <div class="input-group mb-3">
          <input
            ref="addSiteInput"
            v-model="addSiteInput"
            type="text"
            class="form-control"
            placeholder="www.yourwebsite"
            aria-label="www.yourwebsite"
            aria-describedby="button-addon2"
            @keyup.enter="addSiteBtn"
          >
          <button id="button-addon2" class="btn btn-outline-secondary" type="button" @click="addSiteBtn">Add</button>
        </div>

        <div class="list-group mb-3">
          <a
            v-for="item in profile.sites"
            :key="item"
            href="javascript:"
            class="list-group-item list-group-item-action"
            @click="() => removeSiteBtn(item)"
          >
            {{ item }}
          </a>
        </div>
        <div id="emailHelp" class="form-text">SNS나 개인 블로그, 홈페이지 주소 등을 추가해 주세요.</div>

        <div class="mb-3">
          <label class="form-label mt-3">Withdrawal</label>
          <div class="d-grid">
            <button class="btn btn-outline-danger" type="button" @click="withdrawal">회원 탈퇴 하기</button>
            <div class="form-text">주의! 회원 탈퇴시 개인 정보는 모두 삭제되며 게시물은 자동으로 삭제되지 않습니다.</div>
          </div>
        </div>

        <div class="control mt-5">
          <button class="btn btn-secondary" type="button" @click="backBtn">Back</button>
          <button class="btn btn-primary" type="button" @click="saveProfile">Save</button>
        </div>
      </div>
    </content>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {};
    },
    data () {
      return {
        addSiteInput: '',
        profile: {
          backgroundImage: "/api/static/noimage.png",
          avatarImage: "/api/static/noimage.png",
          username: "",
          email: "",
          password: "",
          bio: "",
          field: "",
          contact: {
              email: "",
              website: "",
          },
          sites: [''],
      },
      }
    },
    mounted () {
      const accessToken = this.$accessor.accessToken;
      if (accessToken !== null && accessToken !== '') {
        this.profile.backgroundImage = this.$accessor.UserModule.background!;
        this.profile.avatarImage = this.$accessor.UserModule.avatar!;
        this.profile.username = this.$accessor.UserModule.username!;
        this.profile.email = this.$accessor.UserModule.email!;
        this.profile.bio = this.$accessor.UserModule.introduction!;
        this.profile.field = this.$accessor.UserModule.field!;

        const sites = this.$accessor.UserModule.site!;
        this.profile.sites = sites === '' ? [] : sites.split(',');

        console.log(this.profile);
        this.$forceUpdate();
      }
    },
    methods: {
      addSiteBtn (_event: any) {
        if (this.addSiteInput === '') {
          alert('웹 사이트 주소를 정확하게 입력해 주세요');
          return undefined;
        } else if (this.profile.sites.includes(this.addSiteInput)) {
          alert('이미 동일한 웹 사이트 주소가 포함되어 있습니다');
          return undefined;
        }

        this.profile.sites.push(this.addSiteInput);
        this.addSiteInput = '';

        (this.$refs.addSiteInput as HTMLElement).focus();

        return undefined;
      },
      removeSiteBtn (site: string) {
        const index = this.profile.sites.indexOf(site);
        this.profile.sites.splice(index, 1);

        return undefined;
      },
      withdrawal (_event: any) {
        if (confirm('정말 회원탈퇴 하시겠습니까? (복구 불가능)')) {
        const config = {
          data: {
            username: this.$accessor.UserModule.username
          },
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.$accessor.accessToken}`
          }
        };

          axios
            .delete('/api/user', config)
            .then((response) => {
              if (response.data.success) {
                this.$accessor.setAccessToken('');
                this.$accessor.UserModule.reset();

                alert('회원탈퇴 처리 되었습니다');

                window.location.href = '/home';
              } else {
                alert('회원탈퇴에 실패 했습니다. 다시 시도해 주세요!');
              }
            })
            .catch((error) => {
              alert('회원탈퇴 도중 알수 없는 문제가 발생했습니다!');
              console.log(error);
            });
        }

        return undefined;
      },
      backBtn (_event: any) {
        history.back();
        return undefined;
      },
      saveProfile (_event: any) {
        const config = {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.$accessor.accessToken}`
          }
        };

        const data: any = {
          username: this.$accessor.UserModule.username,
          email: this.profile.email,
          background: this.profile.backgroundImage,
          avatar: this.profile.avatarImage,
          introduction: this.profile.bio,
          site: this.profile.sites.join(','),
          field: this.profile.field
        }

        if (this.profile.password !== "") {
          data.password = this.profile.password;
        }

        axios
          .patch('/api/user', data, config)
          .then((response) => {
            if (response.data.success) {
              alert('회원정보가 수정되었습니다');
              this.$accessor.UserModule.fetch(data.username);
              window.location.href = '/profile';
            } else {
              alert('회원정보 수정에 실패했습니다! 다시 시도해 주세요');
            }
          })
          .catch((error) => {
            alert('회원정보 수정 중에 알수없는 오류가 발생했습니다!');
            console.error(error);
          });

        return undefined;
      }
    },
})
</script>

<style scoped>
  content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }

  content .background {
    width: 100%;
    height: 300px;
    background-size: cover;
  }

  content .background button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  content .background:hover button {
    display: flex;
    background-color: rgba(0, 0, 0, .6);
  }

  content .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-size: cover;
    margin: 20px 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    margin-top: -75px;
    position: relative;
  }

  content .avatar .btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  content .control {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  content .control .btn {
    flex: 1;
  }

  #profile-form {
    width: 100%;
    max-width: 800px;
    padding: 0 10px;
  }
</style>