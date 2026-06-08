-Create React App and Initiallizing Project
-Install and Configure the Tailwindcss
-Install React Icons 
-Create Structure of the Youtube App
  -Header
  -Body
    -SideBar
    -MainContainer
      -NavButtonList
      -VideoContainer
        -VideoCards * n

-Create All Components that need for youtube cone project 
-Create a Yputube home page header, sidebar and all vidoes fetch and show the all vidoes
-Create a ApiKey for google cloud console and use youtube api key
-Create a watc page for vidoes and show the videos 
-create a search bar with search suggesstions feature for user to search
  -In this feature we using debouncing and caching concepts for build optmizing to making api call

  Debouncing => make api call on key Stroke 
    user type the query and start the timer for 200ms to make an api call
    if user type the second letter within 200ms previous timer will be destroyed using clearTimeOut() and start with new timer
    if user pause the typing then timer finishes 200ms and then make api call for suggesstions

    if user type 19 letters normal search make 19 api call for 19 letters but debouncing make collapse to make 19 api call to 0ne api call

  Caching => 




