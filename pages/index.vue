<template>
  <div class="w-full">
    <header class="bg-white shadow-md fixed w-full z-10">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center">
              <a href="/" class="flex-shrink-0">
                <img class="h-8 w-8" src="/logo.png" alt="Workflow logo">
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
    <div class="mx-auto px-4 sm:px-6 lg:px-8 mt-5" id="top">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <h1 class="text-3xl font-bold orange-underline">Redefining Work</h1>
        </div>
        <div class="w-full lg:w-1/2 px-4 order-last lg:order-first">
          <h2 class="text-2xl font-bold mb-5">「はたらく」を再定義する</h2>
          <p class="text-lg mb-3 leading-relaxed">
            日本では8割以上の社会人が「はたらくことにワクワクできていない」現状があります。
            この問題は新卒の早期離職にも反映されており、国内の新卒3年以内の離職率は32.8%にのぼっているのです。<br><br>
            株式会社Motivateは「はたらく」を再定義するため、まずは新卒就活のミスマッチを長期インターンシップという視点から改善していきます。
          </p>
        </div>
        <div class="w-full lg:w-1/2 px-4 order-first lg:order-last mb-5">
          <img src="/future-img.jpg" class="w-full">
        </div>
      </div>
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
            <h1 class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ item.fields.title }}</h1>
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
