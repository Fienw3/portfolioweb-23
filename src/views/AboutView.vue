<script setup>

</script>

<template>
  <div class="about">

  <div class="about-container1">

    
    <div class="about-general lg:w-3/5">
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

    <div class="about-photo lg:w-2/5">
      <img class="portrait" src="../assets/Portraitforweb.jpg" alt="Portrait of Anne-Sofie">

    </div> 

  </div>

    <div class="passionsnfuture">
      <h3>Passions and future</h3>
        <p>em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. Vitae semper quis lectus nulla at volutpat diam ut. Ultricies leo integer malesuada nunc vel. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Cras sed felis eget velit aliquet. Felis eget velit aliquet sagittis id consectetur purus ut. Risus sed vulputate odio ut enim blandit. 
            Eu non diam phasellus vestibulum. Ac tincidunt vitae semper quis lectus nulla at. '

            Leo vel fringilla est ullamcorper. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Pulvinar elementum integer enim neque volutpat ac. Et malesuada fames ac turpis egestas integer eget. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Massa placerat duis ultricies lacus sed turpis tincidunt.

            Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Commodo elit at imperdiet dui accumsan sit amet nulla. Tristique senectus et netus et malesuada fames ac turpis. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Sit amet consectetur adipiscing elit. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Euismod nisi porta lorem mollis aliquam ut. In massa tempor nec feugiat. Bibendum ut tristique et egestas quis. Sit amet purus gravida quis blandit turpis cursus in. Auctor neque vitae tempus quam pellentesque nec nam aliquam. 

            Elit pellentesque habitant morbi tristique. A cras semper auctor neque vitae tempus quam pellentesque nec. Purus sit amet volutpat consequat mauris nunc congue nisi. Odio facilisis mauris sit amet massa. Nibh tellus molestie nunc non. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Eget mi proin sed libero enim sed faucibus. In fermentum et sollicitudin ac orci. Arcu ac tortor dignissim convallis.</p>
    
            <iframe class="videocv" width="720" height="415"
            src="https://www.youtube.com/embed/k3OH_uXeImo">
            </iframe>
    
          </div>

</div>
</template>

<style>


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
    padding: 72px 125px;
    align-items: flex-start;
  }

  .about-container1 {
    display: flex;
  }

  div h2 {
    font-family: "bd-supper", sans-serif;
    font-size: 30px;
    color: #020202;
  }

  .about h3 {
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    padding-top: 32px;
  }

  .download-cv {
  margin: 20px 0px 40px 0px;
  width: 125px;
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  background: rgb(222,244,253);
  background: linear-gradient(356deg, rgba(222,244,253,1) 34%, rgba(249,99,124,0.8661589635854342) 100%, rgba(242,242,242,1) 100%);
  margin-right: 20px;
}

.download-cv:hover {
  transform: scale(1.1);
}

.download-cv {
  margin: 20px 0px 40px 0px;
  width: 125px;
  border-width: 2px 3px 4px 2px;
  border-radius: 10px;
  border-color: black;
  background-image: url(../assets/mesh-gradient.jpg);
  /* background: rgb(222,244,253);
  background: linear-gradient(356deg, rgba(222,244,253,1) 34%, rgba(249,99,124,0.8661589635854342) 100%, rgba(242,242,242,1) 100%); */
  margin-right: 20px;
}

.download-cv:hover {
  transform: scale(1.1);
}

.videocv {
  padding-top: 40px;
}

}
</style>
