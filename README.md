#Arrive Logistics Interview

This was a coding challenge provide by Arrive Logisitics.  As part of their interview process, the following program was written in react to call a provided API and view the information.

##Dependencies
In the Terminal, run following commands,  You can then access the Webpage at  [localhost:8080](http://localhost:8080/)

Also you may need to install chrome add on [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en).  I've never dealt with this issues before, there maybe a more elegant solution, but this was the quickest way i could solve it... was kind of a headache 🤦‍♂️

``` 
yarn
yarn start
```


##Technologies
Following Technolgies that are note worth for accomplish some of the task

* React
* Lodash
* Axio
* Eslint
* Prettier
* Flow

##Problems to Solve

* Avoid Excess API calls 
    - Use Lodash debounce to avoid excess call
    - Consider some additional logic when deleting   
