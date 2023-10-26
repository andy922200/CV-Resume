<template>
  <div id="about" class="about">
    <div class="row">
      <div class="col-12">
        <h3 class="about__title">About Me</h3>
        <div class="avatar">
          <img src="https://i.imgur.com/YB7BrfL.jpg" alt="avatar" />
        </div>
        <div class="description">
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
  </div>
</template>

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

<style lang="scss" scoped src="../styles/About.scss"></style>
