<template>
  <div class="footer">
    <div class="sections">
      <section>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quas
        maiores beatae ab reiciendis praesentium, sed voluptas fuga sequi
        debitis harum voluptates illum similique modi dolorum quos officia
        facere!
      </section>
      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nesciunt
        asperiores dolor laborum necessitatibus totam itaque minima nemo rem,
        vel blanditiis perspiciatis ipsum explicabo veritatis, sed autem est sit
        et!
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--footer);
  width: 100%;
  margin-top: 2rem;
  font-size: 0.9rem;
  border-top: 2px solid rgba(0, 0, 0, 0.1);

  > .sections {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 2rem 1.5rem;
  }
}
</style>