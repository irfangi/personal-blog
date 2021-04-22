<template>
  <div class="container mx-auto py-5">
    <div class="border-b-2 border-gray-200 mb-5 pb-4">
      <h1 class="text-2xl text-gray-700 font-bold border-b-4 inline-block mb-3">
        About Me
      </h1>
      <p class="mb-4">
        Hai, perkenalkan saya Irfangi, biasa dipanggil "Fang" atau "Fangi".
        Sekarang saya bekerja di (<a href="https://www.biznetnetworks.com/"
          >BIZNET</a
        >) sebagai Frontend Web Developer.
      </p>
      <p>
        Tulisan ini catatan tentang beberapa hal yang baru saya lakukan sebagai
        sarana sharing dan catatan pribadi. semoga temen temen dapat manfaat
        dari beberapa catatan yang saya buat.
      </p>
    </div>
    <div class="mb-5">
      <h2 class="text-xl text-gray-700 font-bold border-b-4 inline-block mb-3">
        Timeline
      </h2>
      <ul class="timeline">
        <li>
          <span class="">1997</span>
          <p class="">
            Lahir di Kebumen, Jawa Tengah. Anak ke tiga dari empat bersodara.
          </p>
        </li>
        <li>
          <span class="">2012</span>
          <p class="">
            Masuk salah satu SMK Swasta di KEBUMEN. Kala itu saya memilih
            jurusan Teknik Kendaraan Ringan (TKR) jurusan ini yang sering di
            lirik karena jurusan ini sering menghasilkan lulusan yang langsung
            masuk perusahaan besar seperti ASTRA dll.
          </p>
        </li>
        <li>
          <span class="">2015</span>
          <p>
            2015 adalah tahun kelulusan, Tidak sesuai ekspetasi ketika teman
            sekelas mulai mendaftar kerja, saya tidak bisa ikut karena terhalang
            masalah umur. Kala itu pendafar minimal berusia 18 tahun, sedangkan
            umur saya baru 17 tahun.
          </p>
          <p>
            Sampai Agustus akhir, dengan segala pertimbangan akhirnya saya
            memutuskan untuk kuliah jurusan Teknik Informatika di Yogyakarta.
            Saat itu juga pertama kali saya mempunyai laptop pribadi.
          </p>
        </li>
        <li>
          <span class="">2018</span>
          <p>
            Iseng ikut workshop big data di kampus. akhirnya saya dan beberapa
            teman saya yang lolos workshop ditawari untuk internship selama 3
            bulan di perusaan
            <a href="http://www.indonesiaindicator.com/">Indonesia Indicator</a>
            yang berada di Tangerang Selatan.
          </p>
          <p>
            Beberapa bulan setelah internship tersebut saya di tawari bekerja
            sebagai Backend Web Developer di
            <a href="https://www.tsmid.com/">Tata Sarana Mandiri (TSM)</a> yang
            saat itu terdapat cabang di Yogyakarta. Mulai dari saat itu saya
            mulai kuliah sambil bekerja.
          </p>
        </li>
        <li>
          <span>2019</span>
          <p>
            Maret, Akhirnya diwisuda. walaupun harus drop selama seminggu karena
            kecapean setelah wisuda.
          </p>
        </li>
        <li>
          <span>2021</span>
          <p>
            2019 Akhir, saya mencoba pindah haluan dari Backend ke Frontend web
            dan bekerja di
            <a href="https://www.biznetnetworks.com/">BIZNET</a> sampai
            sekarang.
          </p>
        </li>
      </ul>
    </div>
    <div class="border-t-2 border-gray-200 mb-5 pt-4">
      <ul class="follow">
        <li>
          📭
          <a href="mailto:irfangi564@gmail.com">irfangi564@gmail.com</a>
        </li>
        <li>
          🎑
          <a href="https://www.instagram.com/irfngi/">@irfngi</a>
        </li>
        <li>
          🐙
          <a href="https://github.com/irfangi">@irfangi</a>
        </li>
        <li>
          🔗
          <a href="https://irfangi-portofolio.herokuapp.com/"
            >https://irfangi-portofolio.herokuapp.com/</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  head(){
    return{
      title:"About Me | Irfangi",
    }
  }
}
</script>
<style scoped lang="scss">
.timeline {
  border-left: 1px solid #e5e7eb;
  margin-left: 70px;
  margin-top: 14px;
  li {
    padding: 0 0 16px 32px;
    position: relative;
    span {
      position: absolute;
      transform: translate(-100px, -8px);
    }
    p {
      transform: translateY(-8px);
    }
    &::after {
      content: "";
      width: 14px;
      height: 14px;
      position: absolute;
      transform: translateX(-7px);
      left: 0;
      top: -1px;
      border-radius: 100%;
      @apply bg-gray-300;
    }
  }
}
.follow {
  li {
    @apply py-2;
    a {
      @apply ml-3;
    }
  }
}
</style>