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
