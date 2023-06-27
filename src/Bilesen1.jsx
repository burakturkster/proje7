import React from "react"


function Bilesen1(props) {


    React.useEffect( function() {console.log("Use Effect çalıştı")}, [props.renk, props.yaziRenk] )

    console.log("Bileşen1 render olmak üzere..")

    return (

        <p style={{fontSize:"30px" ,backgroundColor: props.renk, color: props.yaziRenk }}>Örnek bir bileşen!</p>

    )
}

export default Bilesen1