import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href='/redux'>redux</Link><br/>
        <Link href='/jotai'>jotai</Link><br/>
        <Link href='/recoil'>recoil</Link><br/>
        <Link href='/mobx'>mobx</Link><br/>
        <Link href='/valtio'>valtio</Link><br/>
    </div>
  )
}
