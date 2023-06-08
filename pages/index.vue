<template>
  <div class="w-full">
    <header class="bg-white shadow-md fixed w-full z-10">
      <div class="mx-auto px-4 md:px-6 md:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center">
              <a href="/" class="flex-shrink-0">
                <img class="h-8 w-8 object-contain object-center" src="/logo.png" alt="Workflow logo">
              </a>
            </div>
          </div>
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
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
        </div>
      </div>
    </header>

    <div class="w-full flex flex-wrap pt-16">
      <div class="w-full md:w-1/12"></div>
      <div class="w-full flex flex-wrap md:w-10/12">
        <div class="w-full">
          <h1 class="text-8xl font-bold inline-block orange-underline">Redefining Work</h1>
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-bold text-3xl mb-5">「はたらく」を再定義する</h2>
          <p class="text-lg mb-3 px-3 leading-relaxed">
            日本では8割以上の社会人が「はたらくことにワクワクできていない」現状があります。
            この問題は新卒の早期離職にも反映されており、国内の新卒3年以内の離職率は32.8%にのぼっているのです。<br><br>
            株式会社Motivateは「はたらく」を再定義するため、まずは新卒就活のミスマッチを長期インターンシップという視点から改善していきます。
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="/future-img.jpg">
        </div>
      </div>
      <div class="w-full md:w-1/12"></div>
    </div>

    <div class="w-full flex flex-wrap pt-16">
      <div class="w-full md:w-1/12"></div>
      <div class="w-full flex flex-wrap md:w-10/12">
        <h2 class="w-full text-6xl text-center">Value</h2>
        <div class="w-full text-right">
          <h2 class="text-6xl font-bold inline-block orange-underline">Create a company where</h2>
          <h2 class="text-6xl font-bold inline-block orange-underline">everyone's "work" is fun</h2>
        </div>
        <div class="w-full md:w-1/2">
          <img src="/talking.jpg">
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-bold text-3xl mb-5">みんなの「はたらく」が楽しい会社をつくる</h2>
          <p class="text-lg mb-3 px-3 leading-relaxed">
            株式会社Motivateは自社はもちろん、すべての会社のすべての社員が楽しくはたらけるような社会にします。そのためにも以下の3つを大切にしてまいります。
          </p>
          <div class="flex">
            <ol class="text-lg mx-auto list-decimal list-inside">
              <li>
                失敗を恐れずに挑戦し続ける
              </li>
              <li>
                ギブ > テイクの精神で協力し合う
              </li>
              <li>
                仲間を信じる、そして熱狂する
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/12"></div>
    </div>

    <div>
      <router-link v-for="item in items" :key="item.sys.id" :to="`/news/${item.sys.id}`"
        class="block max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" :src="item.fields.thumbnail.fields.file.url"
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

export default {
  data() {
    return {
      contentHtml: '',
    };
  },
  async asyncData({ $contentful }) {
    const response = await $contentful.getEntries({
      content_type: 'newsArticle', // Contentfulのコンテンツタイプを指定します
      // order: '-fields.createdAt',
      limit: 10,
    });

    if (response.items.length > 0) {
      const items = response.items.map(item => {
        const fields = item.fields;
        fields.contentHtml = documentToHtmlString(fields.content);
        item.fields = fields;
        return item;
      });
      return { items };
    }

    return { items: [] };
  },
  mounted() {
    this.contentHtml = documentToHtmlString(this.page.content);
  },
};
</script>
