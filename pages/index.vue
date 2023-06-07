<template>
  <div>
    <h1 class="text-5xl">{{ page.title }}</h1>
    <div v-html="page.contentHtml"></div>
    <img :src="page.thumbnail.fields.file.url" :alt="page.thumbnail.fields.title">
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
      // limit: 1,
    });

    // console.log(response.items[0].fields.content.content)
    if (response.items.length > 0) {
      const page = response.items[1].fields;
      page.contentHtml = documentToHtmlString(page.content);
      console.log("page.contentHtml" + page.contentHtml)
      return { page };
    }

    return { page: null };
  },
  mounted() {
    this.contentHtml = documentToHtmlString(this.page.content);
  },
};
</script>
