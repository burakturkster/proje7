import React from "react"

const Oyun = (props) => {
    const [puan, puanGuncelle] = React.useState(0)

    console.log("Oyun component fonskiyonu çalıştı..")

    function puanKazan() {
        puanGuncelle(function (oncekiDeger) {
            return oncekiDeger + 5
        })
    }

    /* if (puan >= 100) {
        return (
            <p>OYUN BİTTİ, TEBRİKLER!</p>
        )
    }
    else {
        return (

            <>
                <p>Oyun Başladı! Mevcut puan: {puan} Kalan Can: {props.can}</p>
                <button onClick={puanKazan}>Puan Kazan</button>
            </>
        )
    }
}
*/

    return (
        <>
            {
                (puan >= 100) ? <p>Oyun Bitti</p> :
                    <>
                        <p>Oyun Başladı! Mevcut puan: {puan} Kalan Can: {props.can}</p>
                        <button onClick={puanKazan}>Puan Kazan</button>
                    </>
            }
        </>
    )
}
export default Oyun