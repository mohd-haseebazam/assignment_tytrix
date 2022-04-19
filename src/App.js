import "./App.css";
import img from "./assets/img.jpg";

function App() {
  return (
    <div>
      <header>Gesture Theory</header>
      <main>
        {/* circle */}
        <div class="container1">
          <div class="circlebottom">
            <p class="circlebottomtext">Development</p>
          </div>

          <div class="circleleft">
            <p class="circlelefttext">UX</p>
          </div>

          <div class="circleright">
            <p class="circlerighttext">Visual Design</p>
          </div>
        </div>

        <div class="container2">
          <h3>
            A gesture is a form of non-verbal communication or non-vocal
            communication in which visible bodily actions communicate particular
            messages.
          </h3>
          <p class="text">
            Gestures include movement of the hands, face, or other parts of the
            body. Gestures differ from physical non-verbal communication that
            does not communicate specific messages, such as purely expressive
            displays, proxemics, or displays of joint attention.[1] Gestures
            allow individuals to communicate a variety of feelings and thoughts,
            from contempt and hostility to approval and affection, often
            together with body language in addition to words when they speak.
            Gesticulation and speech work independently of each other, but join
            to provide emphasis and meaning. Gesture processing takes place in
            areas of the brain such as Broca's and Wernicke's areas, which are
            used by speech and sign language.[2] In fact, language is thought by
            some scholars to have evolved in Homo sapiens from an earlier system
            consisting of manual gestures
          </p>
          {/* circle  */}
          <div class="container1">
            <div class="circletop1"></div>

            <div class="circleleft1"></div>

            <div class="circleright1"></div>
          </div>
        </div>

        <div class="container3">
          <div class="stepper-wrapper">
            <div class="stepper-item">
              <div class="step-counter"></div>
              <div class="step-name">Hello</div>
            </div>
            <div class="stepper-item">
              <div class="step-counter"></div>
              <div class="step-name">About</div>
            </div>
            <div class="stepper-item">
              <div class="step-counter"></div>
              <div class="step-name">Social</div>
            </div>
            <div class="stepper-item">
              <div class="step-counter"></div>
              <div class="step-name">Magazine</div>
            </div>
            <div class="stepper-item">
              <div class="step-counter"></div>
              <div class="step-name">Contact</div>
            </div>
          </div>
        </div>
      </main>
      <div class="images">
        <h2>Consultant's Profile</h2>
        <div class="imagesDiv">
          <img src={img} alt="consultant profile" />
          <img src={img} alt="consultant profile" />
          <img src={img} alt="consultant profile" />
          <img src={img} alt="consultant profile" />
          <img src={img} alt="consultant profile" />
        </div>
      </div>
    </div>
  );
}

export default App;
