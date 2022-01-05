<template>
  <div class="fullheight px-2 py-6 flex flex-col justify-center sm:py-12">
    <div class="bg-white m-auto p-5 rounded-lg w-full max-w-prose">
      <div class="space-y-8">
        <img
          src="https://cole-hollant-objects.nyc3.cdn.digitaloceanspaces.com/pics/me-profile-pic.jpeg"
          alt="me"
          class="w-full rounded-md shadow"
        />
        <h1 class="text-3xl font-medium">Fleur</h1>
        <div class="space-y-2">
          <div class="flex">
            <a
              class="group flex items-baseline space-x-2"
              href="https://twitter.com/gaybugfeet"
            >
              <p
                class="
                  uppercase
                  text-base
                  font-semibold
                  tracking-wider
                  text-purple-400
                "
              >
                Twitter:
              </p>
              <p
                class="
                  text-lg
                  group-hover:underline
                  text-gray-800
                  group-hover:text-blue-900
                "
              >
                @gaybugfeet
              </p>
            </a>
          </div>
          <div class="flex">
            <a
              class="group flex items-baseline space-x-2"
              href="https://cash.app/$gaybugfeet"
            >
              <p
                class="
                  uppercase
                  text-base
                  font-semibold
                  tracking-wider
                  text-purple-400
                "
              >
                Cashapp:
              </p>
              <p
                class="
                  text-lg
                  group-hover:underline
                  text-gray-800
                  group-hover:text-blue-900
                "
              >
                $gaybugfeet
              </p>
            </a>
          </div>
        </div>

        <div class="flex">
          <a
            href="https://marry-nicole.vercel.app/"
            class="
              mx-auto
              px-8
              py-2
              rounded-full
              bg-pink-300
              text-pink-900
              font-bold
              shadow
              hover:bg-pink-200 hover:shadow-md
              transition
              duration-200
            "
          >
            Marry Me!
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "App",
  setup() {
    onMounted(() => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      window.addEventListener("resize", () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    });
  },
};
</script>

<style lang="postcss">
body,
html {
  @apply bg-purple-200;
}

.fullheight {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>