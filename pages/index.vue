<template>
  <div>
    <section
      class="samar text-light p-5 p-lg-0 pt-lg-5 md-lg-4 text-center text-sm-start"
    >
      <div class="container mt-3">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Lorem, ipsum. <span class="text-warning"> Lorem, ipsum </span>
            </h1>
            <p class="lead mr-2">
              {{ $t("aboutSectionText") }}
            </p>
            <button class="btn btn-primary btn-lg">{{ $t("aboutUs") }}</button>
          </div>
          <img
            class="img-fluid w-50 mt-5 d-none d-sm-block"
            src="~assets/images/samara1.jpg"
          />
        </div>
      </div>
    </section>

    <div class="text-section container">
      <strong>Lorem ipsum dolor sit amet consectetur. </strong>Lorem ipsum dolor
      sit amet consectetur, adipisicing elit. Illo veritatis ipsam doloremque!
    </div>

 
<section id="sectionImage">
  <ModalImage/>
</section>

    <section id="abautUs" class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md">
            <img
              class="img-fluid w-100"
              src="~/assets/images/carSamara.jpeg"
              alt=""
            />
          </div>
          <div class="col-md p-5">
            <h3>{{ $t("aboutUs") }}</h3>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, deleniti consequuntur! Veniam numquam aliquam
              nihil.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              saepe optio nobis aspernatur nisi laboriosam id, ipsa dicta totam!
              Similique a vero corrupti, necessitatibus in voluptatem at debitis
              veniam mollitia?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              saepe optio nobis aspernatur nisi laboriosam id, ipsa dicta totam!
              Similique a vero corrupti, necessitatibus in voluptatem at debitis
              veniam mollitia?
            </p>
          </div>
        </div>
      </div>
    </section>

    <Contact id="register" />
  </div>
</template>

<script>
  import Swal from "sweetalert2";
  import Contact from "../components/Contact_us.vue";
  import ModalImage from '../components/ModalImage.vue'
  export default {
    components: {
      Contact,
      ModalImage
    },

    data(){
      return{
        postImageModal:true
      }
    }
  };
</script>



      <style lang="scss" scoped>

      #abautUs, #register{
        position: relative;
        z-index: 0.1;
      }


.text-section {
  margin-top: 12px;
  font-size: 28px;
  border-bottom: 1.2px solid black;
  text-align: center;
}

@import url("https://fonts.googleapis.com/css?family=Nunito:400,600,700");

.container2 {
  position: relative;
  width: 10%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.container2:hover .image {
  opacity: 0.3;
  width: 60%;
}

// modal image

#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {
  opacity: 0.7;
}









.modal__wrapper {
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 11111;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	.modal-container {
		width: 700px;
		max-width: 700px;
		min-width: 320px;
		max-height: 800px;

		position: relative;
		background-color: #fff;
		transition: all 0.3s ease;
		border-radius: 12px;
		overflow: auto;
	}
}
</style>