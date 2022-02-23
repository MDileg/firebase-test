<template>
  <div>
    <nav class="navbar navbar-expand-lg samar navbar-dark fixed-top">
      <div class="container">
        <a href="#" class="navbar-brand">Samara</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse navDiv" id="navmenu">
          <ul class="navbar-nav navbarUl">
            <li
              class="nav-item d-flex"
              v-for="(locale, j) in locales"
              :key="j"
              @click="$i18n.setLocale(locale.code)"
              :class="{ active: lang === locale.code }"
            >
              <span class="nav-link">
                {{ locale.name }}<span class=""></span>
              </span>
            </li>

            <li class="nav-item">
              <a href="#abautUs" class="nav-link">{{ $t("aboutUs") }}</a>
            </li>

            <li class="nav-item">
              <a href="#register" class="nav-link">{{ $t("register") }}</a>
            </li>

            <li class="nav-item">
              <span href="" class="nav-link" id="myBtn_form">{{
                $t("payment")
              }}</span>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div>
      <!-- Trigger/Open The Modal -->

      <!-- The Modal -->
      <div id="myModal_form" class="modal_form">
        <!-- Modal content -->
        <div class="modal-content_form">
          <span class="close_form">&times;</span>
          <div>
            <v-app dark>
              <v-form
                lazy-validation
                class="w-100 p-5"
                @submit.prevent="login"
                dark
              >
                <h2 class="text-center">Register</h2>

                <v-text-field
                  v-model="admin.username"
                  :rules="phoneNumberRules"
                  label="Gmail"
                  type="gmail"
                  required
                  class="mb-5"
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="admin.password"
                  :rules="passwordRules"
                  label="Password"
                  required
                  class="mb-5"
                ></v-text-field>
                <v-btn
                  :disabled="
                    admin.username != '' && admin.password != '' ? false : true
                  "
                  class="mr-4 bg-primary"
                  type="submit"
                  :loading="loggingIn"
                >
                  Register
                </v-btn>
              </v-form>
            </v-app>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      


<script>
  export default {
    components: {},
    data() {
      return {
        valid: true,
        admin: {
          username: "",
          password: "",
        },
        phoneNumberRules: [(v) => !!v || "Gmail   is required"],
        passwordRules: [(v) => !!v || "Password is required"],
        loggingIn: false,
      };
    },
    computed: {
      lang() {
        return this.$i18n.locale;
      },
      locales() {
        return this.$i18n.locales;
      },
    },
    methods: {
      $tt(tm, ru, en) {
        if (this.$i18n.locale === "tm") {
          return tm;
        } else if (this.$i18n.locale === "en") {
          return en;
        } else {
          return ru;
        }
      },
    },

    mounted() {
      // Get the modal
      var modal = document.getElementById("myModal_form");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn_form");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close_form")[0];

      // When the user clicks the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  };
</script>


      <style lang="scss" scoped>
.payment {
  display: block;
  color: white;
}
body::before {
  display: block;
  content: "";
  height: 56px;
}

@media (min-width: 768px) {
  .news-input {
    width: 50%;
  }
}

@media screen and (min-width: 768px) {
  .navbarUl {
    position: absolute;
    right: 20px;
    z-index: 10002;

    li {
      margin-right: 15px;
    }
  }
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.dFlex {
  display: flex;
  flex-direction: column;
}

/* The Modal (background) */
.modal_form {
  display: flex;
  flex-direction: column;
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content_form {
  align-items: center;
  background-color: #fefefe;
  margin: auto;
  /* padding: 20px; */
  border: 1px solid #888;
  width: 50%;
}

/* The Close Button */
.close_form {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close_form:hover,
.close_form:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

#myBtn_form {
  color: white;
  cursor: pointer;
}
.v-application--wrap {
  min-height: 20vh !important;
}

.nav-item {
  cursor: pointer;
}
</style>