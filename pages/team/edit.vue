<template>
  <div id="profile-edit-page">
    <GlobalNavigationBar :is-auth-page="true" />

    <content>
      <div class="background" :style="`background-image: url(${profile.backgroundImage});`">
        <button @click="uploadBackgroundImage">Change Background Image</button>
      </div>

      <div class="avatar" :style="`background-image: url(${profile.avatarImage});`">
        <button class="btn btn-secondary" @click="uploadAvatarImage"><i class="bi bi-emoji-smile"></i></button>
      </div>

      <div id="profile-form">
        <div class="mb-3">
          <label for="username-input" class="form-label">Team name</label>
          <input v-if="isNewTeam" id="username-input" v-model="profile.username" type="text" class="form-control" aria-describedby="emailHelp">
          <input v-if="!isNewTeam" id="username-input" v-model="profile.username" type="text" class="form-control" aria-describedby="emailHelp" disabled>
          <div id="emailHelp" class="form-text">팀 이름을 입력해 주세요.</div>
        </div>

        <div class="mb-3">
          <label for="email-input" class="form-label">Team Email address</label>
          <input id="email-input" v-model="profile.email" type="email" class="form-control" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">팀 이메일 주소를 입력해 주세요.</div>
        </div>

        <div class="mb-3">
          <label for="password-input" class="form-label">Password</label>
          <input id="password-input" v-model="profile.password" type="password" class="form-control">
          <div id="emailHelp" class="form-text">팀 공용 패스워드를 입력해 주세요. (최소 길이 8자 이상, 특수기호 포함)</div>
        </div>

        <div class="mb-3">
          <label for="bio-input" class="form-label">Bio Messages</label>
          <textarea id="bio-input" v-model="profile.bio" class="form-control" rows="3"></textarea>
          <div id="emailHelp" class="form-text">팀 소개 문구를 적어주세요!</div>
        </div>

        <div class="mb-3">
          <label for="field-input" class="form-label">Fields</label>
          <input id="field-input" v-model="profile.field" type="text" class="form-control">
          <div id="emailHelp" class="form-text">팀의 주요 활동 분야가 뭔가요? (콤마 ","로 구분해 주세요)</div>
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
            aria-describedby="sites-input"
            @keyup.enter="addSiteBtn"
          >
          <button id="sites-input" class="btn btn-outline-secondary" type="button" @click="addSiteBtn">Add</button>
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
        <div class="form-text">SNS나 팀 블로그, 팀 홈페이지 주소 등을 추가해 주세요.</div>

        <div v-if="!isNewTeam" class="mb-3">
          <label class="form-label mt-3">Withdrawal</label>
          <div class="d-grid">
            <button class="btn btn-outline-danger" type="button">팀 삭제 하기</button>
            <div class="form-text">주의! 팀 삭제시 팀 유저 데이터가 삭제되며 게시물은 자동으로 삭제되지 않습니다.</div>
          </div>
        </div>

        <div class="control mt-5">
          <button class="btn btn-secondary" type="button" @click="backBtn">Back</button>
          <button class="btn btn-primary" type="button" @click="saveProfile">Save</button>
        </div>
      </div>
    </content>

    <!-- New Team Modal -->
    <div id="newTeamModal" ref="newTeamModal" class="modal fade" tabindex="-1" aria-labelledby="newTeamModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 id="newTeamModalLabel" class="modal-title fs-5">New Team</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>새로운 팀을 생성합니다.</p>
            <p><b>다른 사람들과 함께 작업하고 작업물을 공유해 보세요!</b></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

declare const bootstrap: any;


export default defineComponent({
    setup() {
        return {};
    },
    data () {
      return {
        isNewTeam: false,
        addSiteInput: '',
        profile: {
          backgroundImage: "/api/static/default_background.jpeg",
          avatarImage: "/api/static/default_avatar.jpeg",
          username: "",
          email: "",
          password: "",
          bio: "",
          field: "",
          contact: {
              email: "",
              website: "",
          },
          sites: ([] as Array<string>),
        },
      }
    },
    mounted () {
      this.isNewTeam = this.$route.query.username === undefined;
      if (this.isNewTeam) {
        
        new bootstrap.Modal(this.$refs.newTeamModal, {}).show();
      }
    },
    methods: {
      uploadBackgroundImage (_event: any) {
        this.uploadFile((fileData: any) => {
          this.profile.backgroundImage = fileData.url;
        });

        return undefined;
      },
      uploadAvatarImage (_event: any) {
        this.uploadFile((fileData: any) => {
          this.profile.avatarImage = fileData.url;
        });

        return undefined;
      },
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
      backBtn (_event: any) {
        history.back();
        return undefined;
      },
      async saveProfile (_event: any) {
        if (this.profile.username === "") {
          alert("Username 내용을 채워 주셔야 합니다");
          return undefined;
        } else if (this.profile.email === "") {
          alert("Email 내용을 채워 주셔야 합니다");
          return undefined;
        } else if (this.isNewTeam && this.profile.password === "") {
          alert("팀 패스워드를 설정해 주시기 바랍니다");
          return undefined;
        }

        const config: any = {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.$accessor.accessToken}`
          }
        };

        if (this.isNewTeam) {
          // Create a new team
          const data = {
            username: this.profile.username,
            email: this.profile.email,
            password: this.profile.password
          };

          try {
            const response = await axios.post('/api/team', data, config);

            if (!response.data.success) {
              throw response;
            }
          } catch (error) {
            alert('팀 생성 과정에서 오류가 발생했습니다!');
            console.error(error);
            return undefined;
          }
        }

        // Update the team data
        setTimeout(async () => {
          const data: any = {
            username: this.profile.username,
            email: this.profile.email,
            background: this.profile.backgroundImage,
            avatar: this.profile.avatarImage,
            introduction: this.profile.bio,
            site: JSON.stringify(this.profile.sites),
            field: this.profile.field
          }

          if (this.profile.password !== "") {
            data.password = this.profile.password;
          }

          try {
            const response = await axios.patch('/api/team', data, config);

            if (!response.data.success) {
              throw response;
            }

            alert('새로운 팀이 생성되었습니다!');
            window.location.href = '/team';

          } catch (error) {
            alert('팀 정보를 업데이트 하는 과정에서 오류가 발생했습니다!');
            console.error(error);
            return undefined;
          }
        }, 500);

        return undefined;
      },
      uploadFile (callback: Function) {
        const input = document.createElement('input') as HTMLInputElement;
        input.setAttribute('type', 'file');
        input.setAttribute('accept', '*/*');
        input.click();

        input.addEventListener('change', async () => {
          const file = input.files![0];
          const formData = new FormData();
          formData.append("file", file);

          try {
            const accessToken = this.$accessor.accessToken;

            const config = {
              headers: {
                accept: '*/*',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${accessToken}`,
              }
            };

            const response = await axios.post('/api/file', formData, config);

            if (response.data.success) {
              const fileUrl = response.data.url;

              const fileData = {
                filename: file.name,
                mine: file.type,
                url: fileUrl,
                size: file.size,
              };

              this.$emit('fileChanged', fileData);

              callback(fileData);
            }

          } catch (error) {
            alert('파일 업로드 중 오류가 발생했습니다!');
            console.error(error);
          }
        });
      },
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
    background-color: white;
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