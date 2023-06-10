<template>
  <div class="w-full">

    <header class="bg-white shadow-md fixed w-full z-10">
      <div class="mx-auto px-4 lg:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center">
              <a href="/" class="flex-shrink-0">
                <img class="h-16 w-32 object-contain object-center" src="/logo.png" alt="Workflow logo">
              </a>
            </div>
          </div>
          <div class="hidden lg:flex lg:items-center lg:space-x-4">
            <a href="#value" class="text-gray-500 hover:text-gray-900">
              Value
            </a>
            <a href="#service" class="text-gray-500 hover:text-gray-900">
              Service
            </a>
            <a href="#about" class="text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>
          <div class="lg:hidden flex items-center">
            <button @click="toggleMenu"
              class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="lg:hidden" v-if="isOpen">
          <a href="#value" class="block px-3 py-2 rounded text-gray-500 hover:text-white hover:bg-gray-700">Value</a>
          <a href="#service" class="block px-3 py-2 rounded text-gray-500 hover:text-white hover:bg-gray-700">Service</a>
          <a href="#about" class="block px-3 py-2 rounded text-gray-500 hover:text-white hover:bg-gray-700">About</a>
        </div>
      </div>
    </header>

    <div class="w-full flex flex-wrap pt-24">
      <div class="w-full lg:w-1/12"></div>
      <div class="w-full flex flex-wrap lg:w-10/12">
        <div class="w-full">
          <h1 class="text-4xl lg:text-8xl font-bold inline-block orange-underline">Redefining Work</h1>
        </div>
        <div class="w-full lg:w-1/2">
          <h2 class="font-bold text-2xl lg:text-3xl m-5">「はたらく」を再定義する</h2>
          <p class="text-lg mb-3 px-3 leading-relaxed">
            日本では8割以上の社会人が「はたらくことにワクワクできていない」現状があります。
            この問題は新卒の早期離職にも反映されており、国内の新卒3年以内の離職率は32.8%にのぼっているのです。<br><br>
            株式会社Motivateは「はたらく」を再定義するため、まずは新卒就活のミスマッチを長期インターンシップという視点から改善していきます。
          </p>
        </div>
        <div class="w-full px-3 lg:w-1/2">
          <img src="/future-img.jpg">
        </div>
      </div>
      <div class="w-full lg:w-1/12"></div>
    </div>

    <div class="w-full flex flex-wrap pt-16" id="value">
      <div class="w-full lg:w-1/12"></div>
      <div class="w-full flex flex-wrap lg:w-10/12">
        <h2 class="w-full text-3xl lg:text-6xl text-center mb-8">Value</h2>
        <div class="w-full text-right">
          <div>
            <h2 class="text-3xl lg:text-6xl font-bold inline-block orange-underline">Create a company where</h2>
          </div>
          <div>
            <h2 class="text-3xl lg:text-6xl font-bold inline-block orange-underline">everyone's "work" is fun</h2>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <img src="/talking.jpg">
        </div>
        <div class="w-full lg:w-1/2 px-6 py-4">
          <h2 class="text-xl lg:text-3xl font-bold m-5 text-center lg:text-left">みんなの「はたらく」が楽しい会社をつくる</h2>
          <p class="text-lg mb-3 leading-relaxed text-center lg:text-left">
            株式会社Motivateは自社はもちろん、すべての会社のすべての社員が楽しくはたらけるような社会にします。そのためにも以下の3つを大切にしてまいります。
          </p>
          <div class="flex justify-center">
            <ol class="text-lg list-decimal list-inside">
              <li>失敗を恐れずに挑戦し続ける</li>
              <li>ギブ > テイクの精神で協力し合う</li>
              <li>仲間を信じる、そして熱狂する</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/12"></div>
    </div>

    <div class="w-full flex flex-wrap pt-16" id="service">
      <div class="w-full lg:w-3/12"></div>
      <div class="w-full flex flex-wrap items-center lg:w-6/12 text-center">
        <h2 class="w-full text-3xl lg:text-6xl ">Service</h2>
        <a href="https://www.advans-intern.jp/" class="w-full">
          <img src="/advans-logo2.jpg" class="w-full" id="logo">
        </a>
        <h2 class="text-lg lg:text-3xl w-full">関西に特化した長期インターンシップ求人サイト</h2>
      </div>
      <div class="w-full lg:w-3/12"></div>
    </div>

    <div class="w-full flex flex-wrap pt-16" id="about">
      <div class="w-full lg:w-4/12"></div>
      <div class="w-full flex flex-wrap items-center lg:w-4/12">
        <h2 class="w-full text-3xl lg:text-6xl text-center mb-8">About</h2>
        <table class="w-full min-w-full divide-y divide-gray-200 mb-8">
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">会社名</th>
              <td class="px-6 py-4 whitespace-nowrap">株式会社Motivate</td>
            </tr>
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CEO</th>
              <td class="px-6 py-4 whitespace-nowrap">佐保健太郎</td>
            </tr>
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTO</th>
              <td class="px-6 py-4 whitespace-nowrap">守高成悟</td>
            </tr>
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
              <td class="px-6 py-4 whitespace-nowrap">info@motivate.co.jp</td>
            </tr>
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">代表番号</th>
              <td class="px-6 py-4 whitespace-nowrap">080-1529-0130</td>
            </tr>
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所在地</th>
              <td class="px-6 py-4 whitespace-nowrap">兵庫県神戸市北区南五葉3-7-6 1F</td>
            </tr>
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">有料職業紹介許可番号</th>
              <td class="px-6 py-4 whitespace-nowrap">28-ユ-301188</td>
            </tr>
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">設立</th>
              <td class="px-6 py-4 whitespace-nowrap">2022年1月</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-full lg:w-4/12"></div>
    </div>

    <div>
      <h2 class="w-full text-3xl lg:text-6xl text-center mb-8">News</h2>
      <router-link v-for="item in items" :key="item.sys.id" :to="`/news/${item.sys.id}`"
        class="block max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-2xl m-4">
        <div class="lg:flex">
          <div class="lg:flex-shrink-0">
            <img class="h-48 w-full object-cover lg:w-48" :src="item.fields.thumbnail.fields.file.url"
              :alt="item.fields.thumbnail.fields.title">
          </div>
          <div class="p-8">
            <h1 class="uppercase tracking-wide text-md text-indigo-500 font-semibold">{{ item.fields.title }}</h1>
            <div v-html="item.fields.contentHtml" class="mt-2 text-gray-500"></div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>



<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import useContentful from '@/plugins/contentful'; 

export default {
  data() {
    return {
      isOpen: false,
      items: [],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  async created() {
    const { getEntries } = useContentful(this.$nuxt.context);
    const response = await getEntries({
      content_type: 'newsArticle',
      limit: 10,
    });

    if (response.items.length > 0) {
      this.items = response.items.map(item => {
        const fields = item.fields;
        fields.contentHtml = documentToHtmlString(fields.content);
        item.fields = fields;
        return item;
      });
    }
  },
};
</script>



