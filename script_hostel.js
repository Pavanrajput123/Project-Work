// Sample data for hostels
const hostels = [
    {
        name: "Greenview Hostel",
        image: "assets/hoste_building.jpg",
        roomSize: "1RK/1BHK/2BHK",
        contact: "9876543210",
        location: "Pune-Katraj",
        detailsLink: "details.html?id=1"
    },
    {
        name: "BlueSky Apartments",
        image: "assets/hoste_building2.jpg",
        roomSize: "2BHK/3BHK",
        contact: "8765432109",
        location: "Pune-Hinjewadi",
        detailsLink: "details.html?id=2"
    },
    {
        name: "City Inn",
        image: "assets/Hostel_Buildin3.jpg",
        roomSize: "1RK",
        contact: "7654321098",
        location: "Pune-Vadgaon",
        detailsLink: "details.html?id=3"
    },
    {
        name: "Platinum Lodge",
        image: "assets/hoste_building4.jpg",
        roomSize: "1BHK",
        contact: "9876543210",
        location: "Pune-Narhe",
        detailsLink: "details.html?id=1"
    },
    {
        name: "Crown Comforts",
        image: "assets/hoste_building5.jpg",
        roomSize: "1BHK/2BHK",
        contact: "8765432109",
        location: "Pune-Wakad",
        detailsLink: "details.html?id=2"
    },
    {
        name: "Golden Nest",
        image: "assets/Hostelimage.png",
        roomSize: "1RK",
        contact: "7654321098",
        location: "Pune-Vadgaon",
        detailsLink: "details.html?id=3"
    }
];

// Inject hostel cards dynamically
const hostelCardsContainer = document.getElementById("hostelCards");

function displayHostels(data) {
    hostelCardsContainer.innerHTML = ""; // Clear previous results
    data.forEach(hostel => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${hostel.image}" class="card-img-top" alt="${hostel.name}" style=" height: 250px;">
                    <div class="card-body">
                        <h5 class="card-title">${hostel.name}</h5>
                        <p class="card-text">Room Size: ${hostel.roomSize}</p>
                        <p class="card-text">Contact: ${hostel.contact}</p>
                        <p class="card-text">Location: ${hostel.location}</p>
                        <a href="${hostel.detailsLink}" class="btn btn-primary">See Room Images</a>
                    </div>
                </div>
            </div>
        `;
        hostelCardsContainer.innerHTML += card;
    });
}

// Initial display of all hostels
displayHostels(hostels);

// Search functionality
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const filteredHostels = hostels.filter(hostel => 
        hostel.name.toLowerCase().includes(query) || 
        hostel.location.toLowerCase().includes(query)
    );
    displayHostels(filteredHostels);
});
