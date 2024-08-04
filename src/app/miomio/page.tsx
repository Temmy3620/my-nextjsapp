import Image from "next/image";

export default function Home() {
  return (
    <div>
      <App />
    </div>
  );
}

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-lg bg-gray-400">
      <h1>メニュー</h1>
      <ul className="menus">

        <Menus name="新着" price={10} />
        <Menus name="おすすめ" price={20} />
        <Menus name="ランキング" price={30} />
        <Menus name="問い合わせ" price={40} />
      
      </ul>
      <p>合計: 0本</p>
    </main>
  );
}

function Menus(props: { name: string , price: number }) {
  console.log(props.name);
  return (
    
    <li>
      <button>-</button>
      <button>+</button>
      {props.name} ({props.price}円 * 0円)
    </li>
    
  );
}
