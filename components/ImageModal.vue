<template>
  <div>
    <div class="card">
      <div class="close" @click="$emit('closeModal')">
        <i class="fa fa-times"></i>
      </div>
      <hooper
        group="group1"
        :settings="hooperSettings"
        v-if="images && images.length > 1"
      >
        <slide class="slide" v-for="(image, index) in images" :key="index">
          <div class="img__wrapper">
            <LazyImage :source="image" alt="TmAfisha-Image" />
          </div>
        </slide>
        <hooper-navigation
          v-if="images && images.length > 1"
          slot="hooper-addons"
        ></hooper-navigation
      ></hooper>

      <div v-else class="img__wrapper">
        <img :src="images[0]" alt="TmAfisha-Image" data-not-lazy />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Hooper,
    Slide,
    Pagination as HooperPagination,
    Navigation as HooperNavigation,
  } from "hooper";
  import "hooper/dist/hooper.css";

  export default {
    name: "ImageModal",

    components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation,
    },

    props: {
      images: [
		  "~/assets/images/samara1.jpg",
		  "~/assets/images/samara1.jpg","~/assets/images/samara1.jpg"
	  ],
      selectedImageIndex: Number,
    },

    data() {
      return {
        hooperSettings: {
          itemsToShow: 1,
          transition: 900,
          infiniteScroll: false,
          initialSlide: this.selectedImageIndex,
        },
      };
    },

    watch: {
      selectedImageIndex(value) {
        this.hooperSettings.initialSlide = value;
      },
    },
  };
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  .img__wrapper {
    width: 700px;
    height: 700px;
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1rem;
    padding: 10px;
    color: gray;
    cursor: pointer;
    z-index: 2;
  }
}

@media only screen and (max-width: 992px) {
  .post__modal-wrapper {
    .card {
      .img__wrapper {
        width: 100%;
        height: auto;
      }
    }
  }
}
@media only screen and (max-width: 667px) {
  .post__modal-wrapper {
    .card {
      .img__wrapper {
        width: 100%;
        height: auto;
      }
    }
  }
}
@media only screen and (max-width: 667px) {
  .post__modal-wrapper {
    .card {
      .img__wrapper {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
