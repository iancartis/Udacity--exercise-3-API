// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&APPID=13634d27472f3340b4b9c814f243de70';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    const newZip = document.getElementById('zip').value;
    const newFeeling = document.getElementById('feelings').value;






    /* Function to GET Web API Data*/
    const getTemp = async(baseURL, newZip, apiKey) => {

        const res = await fetch(baseURL + newZip + apiKey)
        const error = "Couldn't connect the API";
        try {

            const data = await res.json();
            console.log(data)
            return data;
        } catch (error) {
            console.log("error", error);
            // appropriately handle the error
        }
    }

    getTemp(baseURL, newZip, apiKey)
        .then(function(data) {
            console.log(data);
            // postData(/temperature, )

            /* Function to POST data */
            const postData = async(url = '', data = {}) => {

                const response = await fetch(url, {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data), // body data type must match "Content-Type" header        
                });
            };

            /* Function to GET Project Data */
        });
}