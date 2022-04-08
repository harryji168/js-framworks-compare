//svelte.config.js
import path from 'path'
const config = {
    kit: {
        target: '#svelte',
        // add from here, plus the import path from 'path'
        paths: {
            base: process.env.NODE_ENV === "production" ? "/svelte-app/public/" : "",
        },
        vite: {
            resolve: {
                alias: {
                    // these are the aliases and paths to them
                    '@components': path.resolve('./src/lib/components'),
                    '@lib': path.resolve('./src/lib'),
                    '@utils': path.resolve('./src/lib/utils')
                }
            }
        }
    },
}
export default config