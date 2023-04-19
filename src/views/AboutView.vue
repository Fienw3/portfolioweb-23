<script setup>

</script>

<template>
  <div class="about">

  <div class="about-container1 sm:flex-wrap">

    
    <div class="about-general lg:w-3/5 md:w-3/5 sm:w-full">
    <h2>Hi im Anne-Sofie, <br> and this is everything about me.</h2>
    <h3>General information</h3>
    <p>
        Name: Anne-Sofie Walz <br>
        Age: 23 years old <br>
        Occupation: Currently on 2nd semester, <br>
        studying Multimediadesign at Business Academy Southwest <br>
        Location: Esbjerg, Denmark <br>  
    </p>

      <button class="download-cv font-bold" href="http://" alt= "download button for cv" download>Download CV</button>
    </div>

    <div class="about-photo lg:w-2/5 md:w-2/5 sm:w-full">
      <img class="portrait" src="../assets/Portraitforweb.jpg" alt="Portrait of Anne-Sofie">

    </div> 

  </div>

    <div class="future w-full">
      <h3>Past, present and future</h3>
        <p>
          Im a 23 year old born and raised dane, who is currently on her 2nd semester studying multimedia design. I have a lot of passions surounding design and webdevelopment,
          I am super passionate about the creative process from idea to the finished product, I love being a part of a team, and it brings me lots of joy to be a part of something with likeminded people.
          I am always curious about the world around me, therefore i love meeting new people and hearing their ideas, and even better collaborating with them to create something awesome. 
          That curiosity also plays into how im always learning new skills and researching the newest trends. <br>

          In my free time i enjoy a lot of creative and musical hobbies. I love writing poetry in a journal, and pairing it with matching artwork. I also attend a choire every week, where community is valued highly. 
          I love talking to a lot of different people, about our joined love for music. These are the things that helps me unwind and helps me to stay creative.
          <br>
          In the future i want to work in one of these areas, an forever better my skills: ux/ui design, graphic design and web development. Because i love creation, in many different forms.
        
        </p>
            <iframe class="videocv"
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
  margin-top: 2.5rem;
  height: 25rem;
  width: 40rem;
}

</style>
