import React from 'react'
import Block from './components/Blocks/Blocks.js'

export default function App(){
    const comp = [
        {name: 'Ватные диски: Я самая', price: 52, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1943683/img_id8040905162239439616.jpeg/x166_trim", title: "Picture 1"},
        {name: 'Газированный напиток', price: 87, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1582909/img_id2936098039862643219.jpeg/x166_trim", title: "Picture 2"},
        {name: 'Head & Shoulders', price: 179, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1901647/img_id8435863409791922538.jpeg/x166_trim", title: "Picture 3"},
        {name: 'Протеин OptimumNutrition', price: 2900, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1525215/img_id2795445143072269737.png/x166_trim", title: "Picture 4"},
    ]
    return (
        <div>
            <Block name={comp[0].name} price={comp[0].price} imgUrl={comp[0].imgUrl} title={comp[0].title}  />
            <Block name={comp[1].name} price={comp[1].price} imgUrl={comp[1].imgUrl} title={comp[1].title}  />
            <Block name={comp[2].name} price={comp[2].price} imgUrl={comp[2].imgUrl} title={comp[2].title}  />
            <Block name={comp[3].name} price={comp[3].price} imgUrl={comp[3].imgUrl} title={comp[3].title}  />
        </div>
    )
}