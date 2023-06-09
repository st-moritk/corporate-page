<template>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" v-if="fields">
        <div class="mt-10">
            <div class="mb-4">
                <img class="w-full h-64 object-cover rounded-lg" :src="fields.thumbnail.fields.file.url"
                    :alt="fields.thumbnail.fields.title">
            </div>
            <div class="mb-4">
                <h1 class="text-4xl font-bold text-gray-900">{{ fields.title }}</h1>
            </div>
            <div class="prose prose-lg text-gray-500 mx-auto" v-html="fields.contentHtml"></div>
        </div>
    </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import useContentful from '@/plugins/contentful'; 

export default {
  data() {
    return {
      fields: null,
    };
  },
  async created() {
    const { getEntries } = useContentful(this.$nuxt.context);
    const response = await getEntries({
        'sys.id': this.$route.params.id,
        limit: 1,
    });

    if (response.items.length > 0) {
      const item = response.items[0];
      this.fields = item.fields;
      this.fields.contentHtml = documentToHtmlString(this.fields.content);
      console.log("fields", this.fields)
    }
  },
};
</script>
