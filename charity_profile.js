document.getElementById("volunteerNowBtn").addEventListener("click", function () {
  document.getElementById("myForm").style.display = "block";
});

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("time").innerHTML = Date();
}

fetch('https://www.volunteerconnector.org/api/search/')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('volunteer-opportunities');
    container.innerHTML = '';

    data.results.slice(0, 5).forEach(opportunity => {
      const opportunityDiv = document.createElement('div');
      opportunityDiv.classList.add('opportunity');

      opportunityDiv.innerHTML = `
        <h3><a href="${opportunity.url}" target="_blank">${opportunity.title}</a></h3>
        <p><strong>Organization:</strong> ${opportunity.organization.name}</p>
        <p>${opportunity.description}</p>
        <p><strong>Location:</strong> ${opportunity.audience.scope}</p>
      `;

      container.appendChild(opportunityDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching volunteer opportunities:', error);
    document.getElementById('volunteer-opportunities').innerHTML = 'Sorry, we are unable to load opportunities at this time.';
  });
