console.log("Hello World!");

// Current Date for the Title
const dateElement = document.getElementById('date');

console.log(dateElement);

let currentDate = new Date();

console.log(currentDate);

// dateElement.innerHTML = currentDate;


let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);


// Rapid API Trending Twitter
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424977');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '0d89c8f967msh4882fa66b7bef50p1c5cf4jsnd080630a6f9a',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};



// ==================
// dummy date to comment out later(start)
// ===================

// let myPost = {
// 	name: "Lee Sung Kyung",
// 	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
// 	volume: 31799,
// 	followers: 3895734
// };

// console.log(myPost);
// console.log(myPost.name);
// console.log(myPost.queryUrl);
// console.log(myPost.volume);
// console.log(myPost.followers);

// let graphData = [
// 	{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion",
// 	     volume: 67000},
//             {name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
// 	];
// console.log(graphData);
// console.log(graphData[1]);
// console.log(graphData[1].name);

// console.log(graphData);
// // use push() method to add elements in array
// graphData.push(myPost);
// console.log(graphData);



// ==================
// dummy date to comment out later(end)
// ===================


let graphData = [];

// fetch request allows to retrieve the data from twitter
fetch (url, options)
.then(res => res.json())
.then(data => {

	console.log(data);

	console.log(graphData.length);

// for loop are used to do repitive task, in this case to print out each individual element in the graphData array and their 
for(let i =0; i < 25; i++) {
	graphData.push(
         {
         	"name": data.trends[i].name,
         	"volume": data.trends[i].volume
         }
	)
};

// it will allow to return only the name of the twitter
let topics = graphData.map(object => {
	console.log(object);
	console.log(object.name);
	return object.name;
});

console.log(topics);

let volumes = graphData.map(object => {
	return object.volume;
});

console.log(volumes);

// chart template from chartJS

  const ctx = document.getElementById('myChart');

  let barChart =  new Chart(myChart, {
     type: 'bar',
     data: {
       labels: topics,
       datasets: [{
         label: '# of tweets/xeets',
         data: volumes,
         borderWidth: 2,
         backgroundColor: [
         	'rgba(255, 99, 132, 0.2)',
         	'rgba(255, 159, 64, 0.2)',
         	'rgba(255, 205, 86, 0.2)',
         	'rgba(75, 192, 192, 0.2)',
         	'rgba(54, 162, 235, 0.2)',
         	'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
         borderColor: [
         	'rgb(255, 99, 132)',
         	'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
         	                        'rgb(54, 162, 235)',
         	                        'rgb(153, 102, 255)',
         	                        'rgb(201, 203, 207)'
        ],
         hoverBackgroundColor: [
         	'rgb(255, 99, 132)',
         	                        'rgb(255, 159, 64)',
         	                        'rgb(255, 205, 86)',
         	                        'rgb(75, 192, 192)',
         	                        'rgb(54, 162, 235)',
         	                        'rgb(153, 102, 255)',
         	                        'rgb(201, 203, 207)'

        ]

       }]
     },
     options: {
     	indexAxis: 'y',
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   });
});





// ===========================
// copy paste to fetch request(start)
// ===========================



// console.log(graphData.length);

// // for loop are used to do repitive task, in this case to print out each individual element in the graphData array and their 
// for(let i =0; i<2; i++) {
//     console.log(graphData[i]);
//     console.log(graphData[i].name);
//     console.log(graphData[i].queryUrl);
//     console.log(graphData[i].volume);
// }

// // it will allow to return only the name of the twitter
// let topics = graphData.map(object => {
// 	console.log(object);
// 	console.log(object.name);
// 	return object.name;
// });

// console.log(topics);

// let volumes = graphData.map(object => {
// 	return object.volume;
// });

// console.log(volumes);

// // chart template from chartJS

//   const ctx = document.getElementById('myChart');

//   let barChart =  new Chart(myChart, {
//      type: 'bar',
//      data: {
//        labels: topics,
//        datasets: [{
//          label: '# of tweets/xeets',
//          data: volumes,
//          borderWidth: 2,
//          backgroundColor: [
//          	'rgba(255, 99, 132, 0.2)',
//          	'rgba(255, 159, 64, 0.2)',
//          	'rgba(255, 205, 86, 0.2)',
//          	'rgba(75, 192, 192, 0.2)',
//          	'rgba(54, 162, 235, 0.2)',
//          	'rgba(153, 102, 255, 0.2)',
//             'rgba(201, 203, 207, 0.2)'
//         ],
//          borderColor: [
//          	'rgb(255, 99, 132)',
//          	'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//          	                        'rgb(54, 162, 235)',
//          	                        'rgb(153, 102, 255)',
//          	                        'rgb(201, 203, 207)'
//         ],
//          hoverBackgroundColor: [
//          	'rgb(255, 99, 132)',
//          	                        'rgb(255, 159, 64)',
//          	                        'rgb(255, 205, 86)',
//          	                        'rgb(75, 192, 192)',
//          	                        'rgb(54, 162, 235)',
//          	                        'rgb(153, 102, 255)',
//          	                        'rgb(201, 203, 207)'

//         ]

//        }]
//      },
//      options: {
//      	indexAxis: 'y',
//        scales: {
//          y: {
//            beginAtZero: true
//          }
//        }
//      }
//    });


// ===========================
// copy paste to fetch request(end)
// ===========================






