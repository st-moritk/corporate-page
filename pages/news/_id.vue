<template>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

export default {
    async asyncData({ $contentful, params }) {
        const response = await $contentful.getEntries({
            'sys.id': params.id,
            limit: 1,
        });

        if (response.items.length > 0) {
            const fields = response.items[0].fields;
            fields.contentHtml = documentToHtmlString(fields.content);
            return { fields };
        }

        return { fields: null };
    },
};
</script>
  