document.addEventListener('DOMContentLoaded', function() {
    // Function to set up the slider
    function setupSlider() {
      var slides = document.querySelectorAll('.slide');
      var prevButton = document.querySelector('.prev');
      var nextButton = document.querySelector('.next');
      var currentSlideIndex = 0;
  
      function changeSlide(direction) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex += direction;
  
        if (currentSlideIndex >= slides.length) {
          currentSlideIndex = 0;
        } else if (currentSlideIndex < 0) {
          currentSlideIndex = slides.length - 1;
        }
  
        slides[currentSlideIndex].classList.add('active');
      }
  
      prevButton.addEventListener('click', function() { changeSlide(-1); });
      nextButton.addEventListener('click', function() { changeSlide(1); });
  
      slides[currentSlideIndex].classList.add('active'); // Initialize the first slide as active
    }
  
    // Event listener for the Health Topics link
    document.getElementById('healthTopicsLink').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
  
      // Define the new content for the Health Topics section
      var healthTopicsContent = `
        <div class="content-area">
            <div class="text-content">
                <h1>Dengue</h1>
                <p><strong>What is Dengue?</strong><br>
                Dengue viruses are spread to people through the bite of an infected <i>Aedes</i> species mosquito. Almost half of the world's population, about 4 billion people, live in areas with a risk of dengue. Dengue is often a leading cause of illness in areas with risk.</p>
  
                <p><strong>Areas with Risk of Dengue</strong><br>
                Dengue outbreaks are occurring in many countries of the world. Protect yourself from mosquito bites.</p>
  
                <p><strong>Dengue Vaccine</strong><br>
                A dengue vaccine is approved for use in children aged 9 to 16 years with laboratory-confirmed previous dengue virus infection and living in areas where dengue is endemic (common). Endemic areas include some U.S. territories and freely associated states. The vaccine is not approved for use in U.S. travelers who are visiting but not living in an area where dengue is common.</p>
            </div>
            <div class="slider-container">
                <!-- Slider HTML structure -->
                <div class="slide active">
                    <img src="den4.jpg" alt="Dengue Image 1">
                </div>
                <div class="slide">
                    <img src="carousel2.jpg" alt="Dengue Image 2">
                </div>
                <div class="slide">
                    <img src="carousel3.jpg" alt="Dengue Image 3">
                </div>
                <div class="slide">
                    <img src="carousel4.jpg" alt="Dengue Image 4">
                </div>
                <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
                <a class="next" onclick="changeSlide(1)">&#10095;</a>
            </div>
        </div>
      `;
  
      var mainContent = document.getElementById('mainContent');
      mainContent.innerHTML = healthTopicsContent;
  
      // Initialize the slider
      setupSlider();
  
      // Scroll to the mainContent element smoothly
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('outbreaksLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    var outbreaksContent = document.getElementById('outbreaksContent');
    outbreaksContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to insert and display the Outbreaks content
    function displayOutbreaksContent() {
      var mainContent = document.getElementById('mainContent');
      
      // Define the new content for the Outbreaks section
      var outbreaksContent = `
        <div class="outbreaks-section">
          <div class="india-outbreaks">
            <h2>India-Based Outbreaks</h2>
            <p>Recent health alerts reported in India</p>
            <ul>
              <li>National Overview: In 2022, India reported 2,33,251 dengue cases across 35 states and union territories, showing a significant increase in cases since the first major outbreak in 1996​</li>
              <li>Local Outbreak: The northern state of Uttar Pradesh experienced a dengue outbreak suspected to have caused dozens of deaths since early September​​.</li>
              <li>Capital Surge: New Delhi reported nearly 1,170 dengue cases in a week as the country contends with the health crisis amid the COVID pandemic.</li>
              <li>Molecular investigations into the dengue outbreak in Karnataka, a state in South India, revealed the co-circulation of all four dengue virus serotypes during the outbreak period​​.</li>
              <li>The spread of dengue in India has increased dramatically, with a 1312% increase since the first major outbreak in 1996. In 2022, 303 dengue patients died in the country​​.</li>
              <li>Between January and July 31, 2023, there were 31,464 reported cases of dengue and 36 related deaths. This situation has elevated dengue as a major public health concern in the country​​.</li>
              <!-- Add more list items as needed -->
            </ul>
          </div>
          <div class="travel-notices">
          <img src="out1.png" alt="Dengue">
          </div>
        </div>
      `;
  
      // Inject the content into the mainContent area
      mainContent.innerHTML = outbreaksContent;
  
      // Scroll to the mainContent element smoothly
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  
    // Event listener for the Health Topics link
    document.getElementById('healthTopicsLink').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
      // Define and display the Health Topics content here, similar to the Outbreaks content
    });
  
    // Event listener for the Outbreaks link
    document.getElementById('outbreaksLink').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
      displayOutbreaksContent();
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('aboutLink').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        // Define the new content for the About Den-Guard section
        var aboutContent = `
        <div class="about-section">
            <div class="about-text">
                <h1>Den-Guard 24/7</h1>
                <p>Saving Lives, Protecting People ™</p>
                <p>Den-Guard is dedicated to fighting the spread and impact of dengue. With our focus on research, public awareness, and collaboration, we strive to safeguard health and wellbeing. Our mission transcends beyond mere reporting of dengue outbreaks. We are a vigilant assembly of public health advocates, data scientists, and community outreach specialists dedicated to mitigating the impact of dengue across India. Our multifaceted approach encompasses real-time surveillance of dengue spread, gender-specific analysis to tailor effective interventions, and a granular examination of vaccination coverage and efficacy. We believe in empowering individuals with the knowledge to protect themselves, educating communities for collective action, and assisting policymakers in crafting informed strategies. Through our robust data & stats section, we provide a transparent view of the disease's dynamics, aiming to foster a proactive environment where preemptive measures and timely care can significantly reduce the burden of dengue. Join us in our endeavor to safeguard health and enhance the quality of life through diligent research, education, and community-driven solutions against dengue.</p>
            </div>
            <div class="about-image">
                <!-- Replace 'doo.gif' with the path to your animated image -->
                <img src="vac1.png" alt="Animated Image" class="animated-image-style">
            </div>
        </div>
      `;


        // Replace the content of the mainContent area with the new content
        var mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = aboutContent;
        mainContent.style.display = 'block';
        // Scroll to the mainContent element smoothly
        mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('dataStatsLink').addEventListener('click', function(event) {
      event.preventDefault();
      
      var dataStatsContent = `
          <div class="data-stats-section">
              <div class="data-stats-images">
                  <img src="Figure_1_ActiveCases.png" alt="Stat 1" onclick="showStatDetails(1)">
                  <img src="Figure_2_Deaths.png" alt="Stat 2" onclick="showStatDetails(2)">
                  <img src="Figure_3_AffectedStates.png" alt="Stat 3" onclick="showStatDetails(3)">
                  <img src="Figure_4_VaccinatedStates.png" alt="Stat 4" onclick="showStatDetails(4)">
                  <img src="Figure_5_PieChart.png" alt="Stat 5" onclick="showStatDetails(5)">
              </div>
              <div id="statDetails"></div>
          </div>
      `;

      var mainContent = document.getElementById('mainContent');
      mainContent.innerHTML = dataStatsContent;

      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

function showStatDetails(statNumber) {
  var statDetails = document.getElementById('statDetails');
  // Replace the following lines with the actual data or statistics for each image
  var statDetailsHTML = `
      <h3>Stat ${statNumber}</h3>
      <p>Details and statistics for Stat ${statNumber}.</p>
  `;
  statDetails.innerHTML = statDetailsHTML;
}
