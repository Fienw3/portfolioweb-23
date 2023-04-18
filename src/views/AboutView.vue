<script setup>

</script>

<template>
  <div class="about">

  <div class="about-container1 sm:flex-wrap">

    
    <div class="about-general lg:w-3/5 md:w-3/5 sm:w-full">
    <h2>Hi im Anne-Sofie, <br> and this is everything about me.</h2>
    <h3>General information</h3>
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

      <button class="download-cv font-bold" href="http://" alt= "download button for cv" download>Download CV</button>
    </div>

    <div class="about-photo lg:w-2/5 md:w-2/5 sm:w-full">
      <img class="portrait" src="../assets/Portraitforweb.jpg" alt="Portrait of Anne-Sofie">

    </div> 

  </div>

    <div class="passionsnfuture w-full">
      <h3>Passions and future</h3>
        <p>em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. Vitae semper quis lectus nulla at volutpat diam ut. Ultricies leo integer malesuada nunc vel. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Cras sed felis eget velit aliquet. Felis eget velit aliquet sagittis id consectetur purus ut. Risus sed vulputate odio ut enim blandit. 
            Eu non diam phasellus vestibulum. Ac tincidunt vitae semper quis lectus nulla at. '

            Leo vel fringilla est ullamcorper. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Pulvinar elementum integer enim neque volutpat ac. Et malesuada fames ac turpis egestas integer eget. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Massa placerat duis ultricies lacus sed turpis tincidunt.

            Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Commodo elit at imperdiet dui accumsan sit amet nulla. Tristique senectus et netus et malesuada fames ac turpis. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Sit amet consectetur adipiscing elit. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Euismod nisi porta lorem mollis aliquam ut. In massa tempor nec feugiat. Bibendum ut tristique et egestas quis. Sit amet purus gravida quis blandit turpis cursus in. Auctor neque vitae tempus quam pellentesque nec nam aliquam. 

            Elit pellentesque habitant morbi tristique. A cras semper auctor neque vitae tempus quam pellentesque nec. Purus sit amet volutpat consequat mauris nunc congue nisi. Odio facilisis mauris sit amet massa. Nibh tellus molestie nunc non. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Eget mi proin sed libero enim sed faucibus. In fermentum et sollicitudin ac orci. Arcu ac tortor dignissim convallis.</p>
    
            <iframe class="videocv" max-width="920" max-height="615"
            src="https://www.youtube.com/embed/k3OH_uXeImo">
            </iframe>
    
          </div>

</div>
</template>

<style>
  .about {
    min-height: 100vh;
    display: flex-start;
    padding: 3rem 6rem;
  }

  .about-container1 {
    display: flex;
  }

  div h2 {
    font-family: "bd-supper", sans-serif;
    font-size: 30px;
    color: #020202;
    font-size: 2rem;
  }

  div p {
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    color: #020202;
  }

  .about h3 {
    font-weight: bold;
    font-family: "bd-supper", sans-serif;
    padding-top: 32px;
    font-size: 1rem;
  }

  .download-cv {
  margin: 0.625rem 0px 1rem 0px;
  max-width: 255px;
  padding: 0.1rem 0.3rem;
  font-family: 'Courier New', Courier, monospace;
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  background-color:hsla(339,0%,100%,1);
  background-image:
  radial-gradient(at 24% 54%, hsla(33,95%,67%,1) 0px, transparent 50%),
  radial-gradient(at 2% 46%, hsla(187,89%,74%,1) 0px, transparent 50%),
  radial-gradient(at 84% 95%, hsla(344,82%,76%,1) 0px, transparent 50%),
  radial-gradient(at 84% 21%, hsla(187,88%,74%,1) 0px, transparent 50%),
  radial-gradient(at 37% 9%, hsla(344,82%,76%,1) 0px, transparent 50%),
  radial-gradient(at 15% 85%, hsla(187,88%,74%,1) 0px, transparent 50%);
  }

.download-cv:hover {
  transform: scale(1.1);
}

.videocv {
  padding-top: 40px;
}

</style>
