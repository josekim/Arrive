# Arrive Logistics Interview

This was a coding challenge provide by Arrive Logisitics.  As part of their interview process, the following program was written in react to call a provided API and view the information.

## Dependencies
In the Terminal, run following commands,  You can then access the Webpage at  [localhost:8080](http://localhost:8080/)

Also you may need to install chrome add on [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en).  I've never dealt with this issues before, there maybe a more elegant solution, but this was the quickest way i could solve it... was kind of a headache 🤦‍♂️

``` 
yarn
yarn build
yarn start
```


## Technologies
Following Technolgies that are note worth for accomplish some of the task

* React
* Lodash
* Axios
* Eslint
* Prettier
* Flow 

## Features

* Search term is a controlled component 
    * Typing in a term will cause page to make API call once done typing.
    * Debounce keeps multiple calls from happening, there is .5sec delay
    * pressing Enter will force api Call. 
    * Pressing enter will always force API call, so you can spam with that,  Decided not to add addional feature to stop that because of time constrains
* Details will appear when clicking button
    * Only One Api is called for the row
* I intentionally left some console log near the API calls and the Force Update


## Issues

* Details stay open if they are left open and you search another city that has the same Carriers available.  
    - since react only update dom with what needs to change, it leaves those components on the page and doesn't re-render them.  Most people would probably be bothered by this.  Could map a redux state to it, but that maybe a bit overkill.  
    - another options is to replace original information in state with the detailed information, that way when A new search is made, it would re-render since the state changes. you would also have to change the button to not be a toggle but disappear once you got the new detailed information - though chaining up to the parent parent components isn't exactly ideal.  
* Some Flow issues.  Weren't quite sure how to fix them, so Pardon the Commenting out of some of the errors.  Didn't want to spend the time to debug and figure out what was wrong for this.  

## thoughts to make it better

* When API call made for Company details,  add this information to an array in the parent's state component and feed it back down
    * Opposed to this is maybe you do want to get the details every time, maybe they frequently change, though doesn't seems like these company details change much.  
