const cities = [
  
    {
  name: "Pune",
  description: "The cultural capital of Maharashtra — known for its forts, education, and pleasant weather.",
  img: "https://images.unsplash.com/photo-1570356811230-2f3b816ebb29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
  spots: [
    {
      name: "Shaniwar Wada",
      location: "Shaniwar Peth, Pune",
      history: "Built in 1732, this grand fort served as the seat of the Peshwas of the Maratha Empire.",
      img: "https://images.unsplash.com/photo-1760034588108-987757454c18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      prices: { food: "₹300/day", activities: "₹50 (entry fee)", transport: "₹100" }
    },
    {
      name: "Sinhagad Fort",
      location: "Sinhagad Ghat Road, Pune",
      history: "A 17th-century hill fortress famous for the Battle of Sinhagad and its scenic trekking routes.",
      img: "https://images.unsplash.com/photo-1707840422122-268356e197c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
      prices: { food: "₹400/day", activities: "₹100 (trek)", transport: "₹200" }
    },
    {
      name: "Aga Khan Palace",
      location: "Nagar Road, Pune",
      history: "Built in 1892 by Sultan Aga Khan III, it is a historical monument associated with Mahatma Gandhi.",
      img: "https://plus.unsplash.com/premium_photo-1694475157443-58938d0ff195?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      prices: { food: "₹300/day", activities: "₹25 (entry fee)", transport: "₹150" }
    },
    {
      name: "Pataleshwar Cave Temple",
      location: "Jungli Maharaj Road, Pune",
      history: "An 8th-century rock-cut temple dedicated to Lord Shiva, carved out of a single basalt rock.",
      img: "https://media.istockphoto.com/id/1136161958/photo/pune-maharashtra-january-2019-devotee-at-pataleshwar-temple-dome.webp?a=1&b=1&s=612x612&w=0&k=20&c=JXFzpa9Fqrsgnnqyx2JWkop4WTDq03jtDHaYJWM7Njk=",
      prices: { food: "₹200/day", activities: "Free", transport: "₹100" }
    }
  ]
},

  
  
    {
    name: "Mumbai",
    description: "The city that never sleeps, famous for its skyline, culture, and the Arabian Sea.",
    img: "https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE11bWJhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    spots: [
      {
        name: "Gateway of India",
        location: "Apollo Bandar, Colaba, Mumbai",
        history: "Built in 1924 to commemorate the visit of King George V and Queen Mary to India.",
        img: "https://images.unsplash.com/photo-1666843527155-14ec5f016802?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
        prices: { food: "₹400/day", activities: "₹300", transport: "₹150" }
      },
      {
        name: "Marine Drive",
        location: "South Mumbai, near Churchgate",
        history: "A 3.6 km boulevard built in the 1920s, famous for sunset views and sea breeze.",
        img: "https://plus.unsplash.com/premium_photo-1697729588485-6c238cf3ab2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170
        prices: { food: "₹500/day", activities: "₹100", transport: "₹200" }
      },
      {
        name: "Elephanta Caves",
        location: "Gharapuri Island, Mumbai Harbour",
        history: "Rock-cut cave temples from the 5th–8th centuries dedicated to Lord Shiva.",
        img: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnYSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        prices: { food: "₹300/day", activities: "₹200 (ferry)", transport: "₹150" }
      }
    ]
  },
  {
    name: "Goa",
    description: "A tropical paradise known for beaches, forts, churches, and nightlife.",
    img: "https://images.unsplash.com/photo-1642922835816-e2ac68db5c42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    spots: [
      {
        name: "Baga Beach",
        location: "North Goa",
        history: "One of the most popular beaches, known for water sports and nightlife.",
        img: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnYSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        prices: { food: "₹600/day", activities: "₹500 (water sports)", transport: "₹200" }
      },
      {
        name: "Fort Aguada",
        location: "Candolim, North Goa",
        history: "A 17th-century Portuguese fort overlooking the Arabian Sea.",
        img: "https://images.unsplash.com/photo-1670959241110-8570ccbd53d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFndWFkYSUyMGZvcnQlMjBnb2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        prices: { food: "₹400/day", activities: "₹150 (entry + guide)", transport: "₹150" }
      }
    ]
  },
  {
    name: "Jaipur",
    description: "The Pink City of India — a blend of royal heritage and vibrant culture.",
    img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    spots: [
      {
        name: "Hawa Mahal",
        location: "Badi Choupad, Pink City, Jaipur",
        history: "Built in 1799, the 'Palace of Winds' has 953 small windows for royal women to view the streets.",
        img: "https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF3YSUyMG1haGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        prices: { food: "₹300/day", activities: "₹200 (entry + guide)", transport: "₹150" }
      },
      {
        name: "Amber Fort",
        location: "Devisinghpura, Amer, Jaipur",
        history: "Magnificent hilltop fort built in 1592 by Raja Man Singh.",
        img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1iZXIlMjBmb3J0JTIwamFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        prices: { food: "₹400/day", activities: "₹300 (elephant ride)", transport: "₹250" }
      }
    ]
  },
  {
    name: "Delhi",
    description: "The capital of India — a perfect mix of modern city life and Mughal heritage.",
    img: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVsaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    spots: [
      {
        name: "Red Fort",
        location: "Netaji Subhash Marg, Chandni Chowk, Delhi",
        history: "Constructed in 1648 by Emperor Shah Jahan, a UNESCO World Heritage Site.",
        img: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        prices: { food: "₹400/day", activities: "₹250", transport: "₹200" }
      },
      {
        name: "India Gate",
        location: "Rajpath, Delhi",
        history: "War memorial built in 1931 to honor Indian soldiers who died in World War I.",
        img: "https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWElMjBnYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        prices: { food: "₹300/day", activities: "Free", transport: "₹150" }
      }
    ]
  }
];

function displayCities(cityList) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = ""; 

  if (cityList.length === 0) {
    container.innerHTML = `
      <p style="font-size:18px; color:#666; margin-top:40px;">
        No cities found. Try searching for another one.
      </p>
    `;
    return;
  }

  cityList.forEach(city => {
    const card = `
    <div class="card" onclick="openCityPage('${city.name}')">
        <img src="${city.img}" alt="${city.name}">
        <h3>${city.name}</h3>
        <p>${city.description}</p>
    </div>
    `;
    container.innerHTML += card;
  });
}


function searchCity() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = cities.filter(c => c.name.toLowerCase().includes(input));
  displayCities(filtered);
}

function openCityPage(cityName) {
  window.location.href = `spots.html?city=${encodeURIComponent(cityName)}`;
}



displayCities(cities);

