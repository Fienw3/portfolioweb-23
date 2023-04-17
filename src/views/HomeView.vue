<script setup>

</script>

<template>
<div class="home">

  <div class="home-container1">
  <div class="home-about lg:w-3/5">
    
    <h2>Hi! My name is  Anne-Sofie, <br>
      and welcome to my creative universe.</h2>
      <p>At vero eos et accusamus et iusto odio 
dignissimos ducimus qui blanditiis praesentium 
voluptatum deleniti atque corrupti quos dolores 
et quas molestias excepturi sint occaecati 
cupiditate non provident, similique sunt in culpa 
qui officia deserunt mollitia animi, id est laborum 
et dolorum fuga. 
Et harum quidem rerum facilis est et expedita 
distinctio. 
Nam libero tempore, cum soluta nobis est eligendi 
optio cumque nihil impedit quo minus id quod 
maxime placeat facere possimus, omnis voluptas assu
menda est, omnis dolor repellendus.</p>


<div class="aboutme-box columns-2">
        <button class="aboutme-btn">Read more about me here!</button>
        <a class="font-bold" href="http://" download>Download CV</a>
        </div>
</div>

  <div class="home-portrait lg:w-2/5 justify-end">
      <img src="../assets/Portraitforweb.jpg" alt="Portrait of Anne-Sofie">
  </div>

</div>

<div class="home-container2 text-center">
<h2>Featured works</h2>
<div class="featured-works">


</div>

</div>


</div>
</template>

<script setup>
import portfoliodb from '../modules/portfoliodb'

const { state } = portfoliodb()
</script>


<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex-start;
    align-items: center;
    padding: 72px 125px;
  }

  .home-container1 {
    display: flex;
  }

  div h2 {
    font-family: "bd-supper", sans-serif;
    font-size: 30px;
    color: #020202;
  }

  div p {
    font-family: 'Courier New', Courier, monospace;
  }

  .aboutme-box {
  padding: 20px 0px;
  display: flex;
  font-weight: bold;
  color: black;
  font-family: 'Courier New', Courier, monospace;
  }

  .aboutme-btn {
  width: 250px;
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  background: rgb(222,244,253);
  background: linear-gradient(356deg, rgba(222,244,253,1) 34%, rgba(249,99,124,0.8661589635854342) 100%, rgba(242,242,242,1) 100%);
  margin-right: 20px;
}

.aboutme-btn:hover {
  transform: scale(1.1);
}

.home-container2{
  padding: 100px 0px;
}

}
</style>

