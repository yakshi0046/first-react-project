1. create index.html
2. use emmet html:5

3. use DOM manipulation in script tag in index.html :
   (script tag used to write js in html file)

4. browser has JS engine which recognises document keywords to run JS in browser

<body>
    <div id="root"></div>
</body>
<script>
    const heading=document.createElement("h1");
    heading.innerHTML="namaste everyone";
    const root=document.getElementById("root");
    root.appendChild(heading);
</script>

5. React is a library, use CDN(content delivery network) links to import react in our project in index.html

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

6. create App.js and add in script of index.html
7. npm init
8. install parcel bundler(npm i -D parcel)
9. install react and react-dom(remove scripts)
10. run project with command (npx parcel index.html)index html is entry point and parcel will run it
11. import react and reactDOM in js file and add type="module" in script tag of index.html
    because browser runs index.html file,it did not recogize import so we need to tell this is a module
12. add node_modules,dist and .parcel-cache in .gitignore(which autogenerate put them in .gitignore)
13. add "start":"npx parcel index.html scripts of package.json
14. install npm i babel-plugin-transform-remove-console to remove consoles after build
    and create .babelrc to configure above command add plugin to remove consoles
15. made flow of app components and all
    header
    logo
    nav item(home about contact)
    cart
    body
    Search bar
    resturantlist
    resturantCard
    image
    name
    rating
    cusines
    footer
    links
    copyrights
    16)create AppLayout comp(header,body,footer)
    create header component(title,navitems), title(logo)
    create body(resutrantcard),resutrantcard component(rsturantlist),resturantlist comp

17)focus on resurantcards (static cards intially make dynamic)
how?
i)create object for card
const burgerKing = {
name: "burger king",
image: "https://miro.medium.com/max/1200/1*pIJH1mPega8583Y3NuPaLg.jpeg",
cusines: ["burgers", "american"],
rating: "4.2",
};

ii)take data from swiggy api
https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING
add JSON viewer extension for json format this link

Leacture 6:

18. where should we call API calls?
    in useEffect-> (load -> render page(shimmer)-> Api call-> update page(with data))

const getResturants = async () => {
const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
);
// convert data to json to read it
const json = await data.json();
// use optional chaining always
setResturants(json?.data?.cards[2]?.data?.data?.cards);
};

// called after intial render, empty dependency-> call once only
// with state it will call whenever state changes and once after render
React.useEffect(() => {
getResturants();
}, [searchTxt]);

19. we will get CORS error (because we are using data from another app)
    add extension allow CORS(browser stops to take data from another browser)
    Enable the extension

20. add shimmer(because api will take time to get data until then show shimmer like cards without data)
21. add filteredResturants because we need to filter data to show after searching but we need all resturants if
    user searches again so we need another state filteredResturants
22. added conditions where resturants are not defined , filteredresturants length is zero
23. learned Conditional, optional chaining, added shimmer

Leacture 7:Routers

24. react-shimmer package is also available for shimmer but create your own shimmer
    (never install extra and useless packages)

npm i react-router-dom
add About.js file

25. add createBrowserRouter(most recommended to create route) in App.js from react-route-dom
    have another options too to create route(read about them)
    const appRouter=createBrowserRouter([
    {
    path:'/',
    element:<AppLayout/>
    },
    {
    path:'/about',
    element:<About/>
    }
    ]);

26. provide router to DOM how?
    RouterProvider from react-router-dom
    root.render(<RouterProvider  router={appRouter}/>);

27. provide href to About in header how?
    use Link from react-router-dom, why not anchor tag?
    anchor tag reloads whole page, Link makes our project SPA(single page application)
    it will render our component without reloading whole page
    At the end of day, LInk is only a anchor tag

28. create error component why?
    if user went to any another route which is not provided to cretateBrowserRouter
    it will not throw error in console(give default error page given by react-router-dom)
    make your own cool error page

29. how to add error comp in route:
    {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    }
30. how to get error details?
    useRouteError from react-router-dom
    const err = useRouteError();
    <h2>{err.status + " : " + err.statusText}</h2>

31. want header and footer in About page so we need to put it as child in appLayout
    but it will load on browser with body
    so use OUTLET (to add children about,contact)
    Add outlet in  
     <Header />
    <Outlet />
    <Footer />
    add children in appRouter
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
    {
    path: "/",
    element: <Body />,
    },
    {
    path: "/about",
    element: <About />,
    },
    ],
