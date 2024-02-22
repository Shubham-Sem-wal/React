// const heading = React.createElement(
//     "h1" , 
//     {id : "heading"} , 
//     "hello world from react"); 

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);




/* how to create nested structure --
 * 
 * <div id="parent" >
        <div id="child">
         <h1>hello nested structure</h1>
        </div>
    </div>
 *   
 */

    const parent = React.createElement(
        "div",
        {id : "parent"},
        React.createElement("div" , {id:"child"},React.createElement("h1",{},"hello nested structure"))
    )

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);

