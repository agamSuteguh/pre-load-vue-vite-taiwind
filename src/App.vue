
<template>
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
        <div class="flex items-center justify-center space-x-2">
            <div
                class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500 mb-4" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 4.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L7 12.586l8.293-8.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
                <h2 class="text-center text-white text-xl font-semibold">All content loaded successfully</h2>
            </div>
        </div>
    </div>

    <router-view class="p-24"></router-view>
</template>

<style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}

nav {
    a.active {
        &::after {
            @apply block w-full bg-green-500;
            content: '';
            height: 1.5px;
        }
    }
}</style>
