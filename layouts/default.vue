<template>
  <Head>
    <Title>Mirza Rizky — Web Developer</Title>
    <AppFont />
  </Head>

  <div class="container">
    <div class="flex flex-col max-w-screen-xl min-h-screen mx-auto font-sans">
      <div class="flex-grow">
        <!-- <navbar /> -->
        <slot />
        <div class="flex justify-center my-10 sm:my-16 md:my-24">
          <NuxtLink
            to="/contact"
            class="text-3xl font-medium text-center sm:text-4xl md:text-5xl lg:text-6xl focus:outline-none focus:underline hover:underline"
          >
            you like what you see? <br />
            let's work together
          </NuxtLink>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
