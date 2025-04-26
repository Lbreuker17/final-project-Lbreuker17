document.addEventListener('DOMContentLoaded', function () {
  const volunteerBtn = document.getElementById("volunteerNowBtn");
  const myBtn = document.getElementById("myBtn");

  if (volunteerBtn) {
    volunteerBtn.addEventListener("click", function () {
      document.getElementById("myForm").style.display = "block";
    });
  }

  if (myBtn) {
    myBtn.addEventListener("click", displayDate);
  }

  function displayDate() {
    document.getElementById("time").innerHTML = Date();
  }

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('volunteer-opportunities');
      container.innerHTML = '';

      data.slice(0, 5).forEach(post => {
        const opportunityDiv = document.createElement('div');
        opportunityDiv.classList.add('opportunity');

        opportunityDiv.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;

        container.appendChild(opportunityDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching volunteer opportunities:', error);
      document.getElementById('volunteer-opportunities').innerHTML = 'Sorry, we are unable to load opportunities at this time.';
    });
});

  .catch(error => {
    console.error('Error fetching volunteer opportunities:', error);
    document.getElementById('volunteer-opportunities').innerHTML = 'Sorry, we are unable to load opportunities at this time.';
  });
