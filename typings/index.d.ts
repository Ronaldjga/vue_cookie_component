import type cookieButton from "../src/components/cookie-button.vue"
import type cookieDialog from "../src/components/cookie-dialog.vue"
import type cookieActions from "../src/components/cookie-actions.vue"

declare module "vue-cookie-component" {
    interface GlobalComponents {
        cookieButton: typeof cookieButton,
        cookieDialog: typeof cookieDialog,
        cookieActions: typeof cookieActions
    }
}