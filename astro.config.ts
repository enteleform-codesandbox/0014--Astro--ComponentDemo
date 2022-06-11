import {defineConfig} from "astro/config"
import React          from "@astrojs/react"
import Solid          from "@astrojs/solid-js"


export default defineConfig({

	integrations: [
		React(),
		Solid(),
	],

})
