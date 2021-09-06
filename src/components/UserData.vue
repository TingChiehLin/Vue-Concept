<template>
    <section class="container">
        <div class="block" :class="{animate: animatedBlock}"></div>
        <form @submit.prevent="submitData">
          <input type="text" placeholder="Your name" v-model="enterName"/>
          <input type="text" placeholder="Your age" v-model="enterAge"/>
          <button @click="animateBlock">Submit</button>
        </form>
    </section>
</template>

<style>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
}

.block {
  width: 200px;
  height: 200px;
  background-color: purple;
  /*transition: transform 0.3s ease-out;*/
}

.animate {
  /*transform: translateX(-150px);*/
  animation: slide-fade 0.3s ease-out forwards;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

</style>

<script>
export default {
    emits: ['set-data'],
    data() {
      return {
        animatedBlock: false,
        enterName: '',
        enterAge: ''
      };
    },
    methods: {
      animateBlock() {
        this.animatedBlock = true;
      },
      submitData() {
        this.$emit('set-data', this.enterName, this.enterAge);
      }
    }
};

</script>
