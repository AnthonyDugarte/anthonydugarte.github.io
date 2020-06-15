<template>
  <ul>
    <StoryItem
      title="Systems Engineering"
      imgSrc="ula.png"
      imgAlt="Universidad de los Andes"
    >
      I'm a second year Systems Engineering student at the Univerisdad de los
      Andes, in Venezuela.
    </StoryItem>

    <StoryItem title="Competitive Programming" imgSrc="icpc.png" imgAlt="ICPC">
      I've participated on Competitive Programming contests at my university.
    </StoryItem>

    <StoryItem
      title="Developing games for fun"
      imgSrc="pacman.png"
      imgAlt="Pacman"
    >
      my most beloved one has been:
      <a
        href="https://github.com/AnthonyDugarte/PacMan"
        target="_blank"
        class="underline text-blue-700 visited:text-indigo-700 font-semibold"
        >Pacman</a
      >, I coded every single line of it!
    </StoryItem>

    <StoryItem title="What do I do?" imgSrc="pacman.png" imgAlt="Example image">
      I do web and mobile apps, I have been working through all the Stack for 2
      years already.
    </StoryItem>
  </ul>
</template>

<script>
import StoryItem from './Item'

export default {
  components: {
    StoryItem,
  },
}
</script>
