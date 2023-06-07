require('dotenv').config()

import * as contentful from 'contentful';
const client = contentful.createClient
 ? contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
 })
 : contentful.default.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
 });

export default (context, inject) => {
    inject('contentful', client)
}