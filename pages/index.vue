<template>
  <div>
    <div v-for="item in items" :key="item.sys.id">
      <h1>{{ item.fields.title }}</h1>
      <div v-html="item.fields.contentHtml"></div>
      <img :src="item.fields.thumbnail.fields.file.url" :alt="item.fields.thumbnail.fields.title">
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
