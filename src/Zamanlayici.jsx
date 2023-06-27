import { useEffect, useState } from "react"

function Zamanlayici() {
    const [sayac, sayacGuncelle] = useState(0);

    useEffect(() => {

        setInterval(() => {
            sayacGuncelle((sayac) => sayac + 1);
        }, 1000);

        console.log("Zamanlayici programlandı.")
    },[]);

    return <h1>{sayac} kez render edildi!</h1>;
}

export default Zamanlayici