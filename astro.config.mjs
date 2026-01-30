// @ts-nocheck
import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://constructors.madethemes.com',
  base: '/',
  output: 'static',

  integrations: [
    icon({
       include: {
        // Include Bootstrap icons used in the project
        bi: ['journal-check','play-fill','egg-fried','gem','cup-hot','star-half','flower1','heart-fill','clock-fill','whatsapp','chevron-down','send','arrow-up','play-circle-fill','building','minecart-loaded','fuel-pump','houses','clock-history','truck-front','star-fill','chevron-left','chevron-right','person-check','calendar-check','eye','flag','geo-alt-fill','send-fill',
          'list','tiktok', 'x-lg','envelope','telephone','geo-alt','tag','shield-check','cash-stack','house-door','graph-up-arrow','info-circle','headset','graph-up','currency-dollar','people','award','github','youtube','google','arrow-right','palette-fill','bar-chart-fill','search','envelope-fill','facebook','instagram','twitter-x','linkedin','telephone-fill','braces','award-fill',
          'truck','check-circle-fill','speedometer2','calculator','cone-striped','house-door-fill','gear-fill','folder-fill','arrow-left','arrow-right','layers','wrench','person','clipboard','shield'
        ],
      }
    }),
    mdx(),
  ],

  vite: {
    resolve: {
      alias: {
        '@img': '/src/img',
      },
    },
    plugins: [tailwindcss()]
  }
});