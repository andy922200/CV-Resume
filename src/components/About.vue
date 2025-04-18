<script setup lang="ts">
defineOptions({
  name: 'About',
})

const descriptions = [
  {
    content:
      'I am passionate about technology and find my own accomplishments while developing a variety of web applications. I am taking all my efforts to gather more knowledge and skills all the time. They will be imprinted on my mind someday.',
  },
  {
    content:
      'I have been working in a startup and an huge corporation, which is well-known in the traditional industry. In the fast-changing environment, I assist the team with my appropriate problem-solving skills, patience and sympathy efficiently.',
  },
  {
    content: 'Now, I am located in Taiwan.',
  },
]
</script>

<template>
  <div id="about" class="row">
    <div class="col-12">
      <h3 class="my-1.25rem text-size-[1.625rem] sm:text-size-[2rem] mx-0">About Me</h3>
      <div class="mx-auto my-0 max-h-[200px] max-w-[120px] sm:max-h-[250px] sm:max-w-[190px]">
        <img
          class="h-auto max-h-[100%] w-auto max-w-[100%]"
          src="https://i.imgur.com/YB7BrfL.jpg"
          alt="avatar"
        />
      </div>
      <div
        class="my-1.25rem text-size-[1rem] line-height-6 sm:text-size-[1.25rem] sm:line-height-8 mx-0 text-left"
      >
        <p
          v-for="(item, index) in descriptions"
          :key="index"
          :data-aos="'fade-top'"
          :data-aos-once="true"
          :data-aos-duration="1000"
        >
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>
