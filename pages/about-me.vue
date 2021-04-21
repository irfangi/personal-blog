<template>
  <div class="container mx-auto py-5">
    <div class="border-b-2 border-gray-200 mb-5">
      <h1 class="text-2xl text-gray-700 font-bold border-b-4 inline-block mb-3">
        About Me
      </h1>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eveniet
        quisquam sequi corrupti ullam recusandae at? Natus alias aspernatur
        fugit voluptatem animi quo odit, eaque autem in optio! Molestiae,
        maxime?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nesciunt rem fuga laudantium doloremque inventore tempora est,
            molestias, animi veritatis harum maiores alias. Quia adipisci iste
            sequi animi, debitis aperiam.
          </p>
        </li>
        <li>
          <span class="">1997</span>
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nesciunt rem fuga laudantium doloremque inventore tempora est,
            molestias, animi veritatis harum maiores alias. Quia adipisci iste
            sequi animi, debitis aperiam.
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
          <a href="https://irfangi-portofolio.herokuapp.com/">https://irfangi-portofolio.herokuapp.com/</a>
        </li>
      </ul>
    </div>
  </div>
</template>
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
.follow{
    li{
        @apply py-2;
        a{
            text-decoration: underline;
            @apply text-blue-700;
            @apply ml-3;
        }
    }
}
</style>
