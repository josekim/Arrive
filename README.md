#Arrive Logistics Interview

This was a coding challenge provide by Arrive Logisitics.  As part of their interview process, the following program was written in react to call a provided API and view the information.

##Dependencies
In the Terminal, run following commands,  You can then access the Webpage at  [localhost:8080](http://localhost:8080/)

Also you may need to install chrome add on [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en).  I've never dealt with this issues before, there maybe a more elegant solution, but this was the quickest way i could solve it... was kind of a headache 🤦‍♂️

``` 
yarn
yarn build
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

##Features
Search Function

* Search term is a controlled component for the Search Term
    * Typing in a term will cause page to make API call once done typing.
    * Debounce keeps multiple calls from happening, there is .5sec delay
    * pressing Enter will force api Call. 
    * Pressing enter will always force API call, so you can spam with that,  Decided not to add addional feature to stop that because of time constrains
* Details will appear when clicking button
    * Only One Api is called for the row
* I intentionally left some console log near the API calls and the Force Update


##issues

* Details stay open if they are left open and you search another city that has the same Carriers available.  
    - since react only update dom with what needs to change, it leaves those components on the page and doesn't re-render them

## thoughts to make it better

* When API call made for Company details,  add this information to an array in the parent's state component and feed it back down
