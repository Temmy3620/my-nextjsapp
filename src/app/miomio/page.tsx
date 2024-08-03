import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-lg bg-gray-400">
      <h1>メニュー</h1>
      <ul className="menus">
        <li>おすすめ</li>
        <li>新着</li>
        <li>人気</li>
        <li>ジャンル</li>
      </ul>
      <p>合計: 0本</p>
      
    </main>
  );
}
