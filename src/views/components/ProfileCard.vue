<template>
  <div class="card h-100">
    <div class="p-3 pb-0 card-header">
      <div class="row">
        <div class="col-md-8 d-flex align-items-center">
          <h6 class="mb-0">Profile Information</h6>
        </div>
        <div class="col-md-4 text-end">
          <a href="javascript:;">
            <i
              class="text-sm fas fa-user-edit text-secondary"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Edit Profile"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div class="p-3 card-body">
      <p class="text-sm">
        Hai, saya Raynanda, Keputusan: Jika Anda tidak dapat memutuskan, jawabannya adalah tidak.
        Jika ada dua jalan yang sama sulitnya, pilihlah jalan yang lebih menyakitkan dan pendek
        istilah (penghindaran rasa sakit menciptakan ilusi kesetaraan).
      </p>
      <hr class="my-4 horizontal gray-light" />
      <ul class="list-group">
        <li class="pt-0 text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Nama Panjang:</strong> &nbsp; Rian Juan Raynanda A
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">No Telpon:</strong> &nbsp; (+62) 896 5628 8779
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Email:</strong> &nbsp; jrian313@gmail.com
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Lokasi:</strong> &nbsp; INA
        </li>
        <li class="pb-0 border-0 list-group-item ps-0">
          <strong class="text-sm text-dark">Sosial:</strong> &nbsp;
          <a
            class="py-0 mb-0 btn btn-facebook btn-simple ps-1 pe-2"
            href="javascript:;"
          >
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a
            class="py-0 mb-0 btn btn-twitter btn-simple ps-1 pe-2"
            href="javascript:;"
          >
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a
            class="py-0 mb-0 btn btn-instagram btn-simple ps-1 pe-2"
            href="javascript:;"
          >
            <i class="fab fa-instagram fa-lg"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>
