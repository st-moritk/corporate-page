<template>
  <div>
    <router-link v-for="item in items" :key="item.sys.id" :to="`/news/${item.sys.id}`" class="block max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-48 w-full object-cover md:w-48" :src="item.fields.thumbnail.fields.file.url" :alt="item.fields.thumbnail.fields.title">
        </div>
        <div class="p-8">
          <h1 class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ item.fields.title }}</h1>
          <div v-html="item.fields.contentHtml" class="mt-2 text-gray-500"></div>
        </div>
      </div>
    </router-link>
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
      console.log(items);
      return { items };
    }

    return { items: [] };
  },
  mounted() {
    this.contentHtml = documentToHtmlString(this.page.content);
  },
};
</script>
