import React from "react";
const NavContex = React.createContext({
    page: 0,
    goNextPage: (page) => { },
    goPrevPage:(page)=>{}

});


export default NavContex;
