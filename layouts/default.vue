<template>
  <div>
    <Header />
    <nuxt />

    <footer>
      <div class="p-2 samar">
        <div class="d-flex justify-content-center my-4 copy">
          <span class="text-center text-light"
            ><i class="fa fa-phone mx-2">+993 63 00 22 11</i> &copy;
            {{ new Date().getFullYear() }}</span
          >
        </div>
        <div class="social_med">
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
          <i class="fa fa-google" aria-hidden="true"></i>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Header from "../components/Header";

  export default {
    components: {
      Header,
    },
  };
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
.social_med {
  display: flex;
  justify-content: center;
  i {
    margin-right: 17px;
    font-size: 30px;
    opacity: 0.2;
    color: white;

    &:hover {
      opacity: 1;
    }
  }
}

.copy {
  font-size: 15px;
}

::-webkit-scrollbar {
  width: 8px;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #55b538;
  border-radius: 8px;
  box-shadow: inset 0 0 5px grey;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #55b538;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 8px;
}

::-webkit-scrollbar-track:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>