// import { createContext, useContext, useEffect, useState } from "react";

// const cartContext = createContext({
//     emailValue:"",
//     emailTaker:(email)=>{},
//     authcheker:false,
//     authValid:()=>{}

// })
// export const useCartContext=()=>{
//     return useContext(cartContext)
// }
// const CartProvider = ({children})=>{
//     const [emailValue,setEmailValue]=useState()
//     const [authcheker,setAuthcheker]=useState(false)
//     const emailTaker=(email)=>{
//         setEmailValue(email)
//     }
//     const authValid=()=>{
//         useEffect(() => {
//             const authState = localStorage.getItem("auth");
//             if (authState === "true") {
//                 setAuthcheker(true);
//             }
//         }, []);
        
//         // setAuthcheker(true)
//     }
//     // console.log(emailValue);
    

// return <cartContext.Provider value={{ emailValue, emailTaker,authcheker,authValid }}>
//     {children}
// </cartContext.Provider>
// }
// export default CartProvider
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({
  emailValue: "",
  emailTaker: (email) => {},
  authcheker: false,
  authValid: () => {},
});

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [emailValue, setEmailValue] = useState("");
  const [authcheker, setAuthcheker] = useState(false);

  // Function to store email
  const emailTaker = (email) => {
    setEmailValue(email);
    localStorage.setItem("email", email);
  };

  // Function to validate authentication
  const authValid = (val) => {
    setAuthcheker(val);
    localStorage.setItem("auth", `${val}`); // Persist auth state
  };

  // Restore authentication state on reload
  useEffect(() => {
    const authState = localStorage.getItem("auth");
    const storedEmail = localStorage.getItem("email");

    if (authState === "true") {
      setAuthcheker(true);
    }
    if (storedEmail) {
      setEmailValue(storedEmail);
    }
  }, []);

  return (
    <CartContext.Provider value={{ emailValue, emailTaker, authcheker, authValid }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
