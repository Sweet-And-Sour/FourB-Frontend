<template>
  <div id="profile-edit-page">
    <GlobalNavigationBar />

    <content>
      <div class="background" :style="`background-image: url(${profile.backgroundImage});`">
        <button>Change Background Image</button>
      </div>

      <div class="avatar" :style="`background-image: url(${profile.avatarImage});`">
        <button class="btn btn-secondary"><i class="bi bi-emoji-smile"></i></button>
      </div>

      <div id="profile-form">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input id="exampleInputEmail1" type="text" class="form-control" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">사용자 이름을 입력해 주세요.</div>
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input id="exampleInputEmail1" type="email" class="form-control" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">이메일 주소를 입력해 주세요.</div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input id="exampleInputPassword1" type="password" class="form-control">
          <div id="emailHelp" class="form-text">패스워드를 입력해 주세요. (최소 길이 8자 이상, 특수기호 포함)</div>
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Bio Messages</label>
          <textarea id="exampleFormControlTextarea1" class="form-control" rows="3"></textarea>
          <div id="emailHelp" class="form-text">다른 사람들에게 자기자신을 소개해 보세요!</div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Fields</label>
          <input id="exampleInputPassword1" type="text" class="form-control">
          <div id="emailHelp" class="form-text">어떤 분야에서 활동하고 계신가요? (콤마 ","로 구분해 주세요)</div>
        </div>

        <label for="basic-url" class="form-label">Website Address</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="www.yourwebsite" aria-label="www.yourwebsite" aria-describedby="button-addon2">
          <button id="button-addon2" class="btn btn-outline-secondary" type="button">Add</button>
        </div>

        <div class="list-group mb-3">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            github.com/profile
          </a>
          <a href="#" class="list-group-item list-group-item-action">sweet2022.kro.kr/profile/user</a>
          <a href="#" class="list-group-item list-group-item-action">github.com/Sweet-And-Sour/FourB-Frontend</a>
        </div>
        <div id="emailHelp" class="form-text">SNS나 개인 블로그, 홈페이지 주소 등을 추가해 주세요.</div>

        <div class="mb-3">
          <label class="form-label mt-3">Withdrawal</label>
          <div class="d-grid">
            <button class="btn btn-outline-danger" type="button">회원 탈퇴 하기</button>
            <div class="form-text">주의! 회원 탈퇴시 개인 정보는 모두 삭제되며 게시물은 자동으로 삭제되지 않습니다.</div>
          </div>
        </div>

        <div class="control mt-5">
          <button class="btn btn-secondary" type="button">Back</button>
          <button class="btn btn-primary" type="button">Save</button>
        </div>
      </div>
    </content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {};
    },
    data () {
      return {
        profile: {
          backgroundImage: "https://images.unsplash.com/photo-1669940986274-e3a909d20348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
          avatarImage: "https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_1280.jpg",
          username: "huahua",
          bio: "Bio message bio message bio message bio message bio message bio message",
          field: "Designer, musician",
          contact: {
              email: "huahua@fourB",
              website: "fourb.web2",
          },
      },
      }
    }
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