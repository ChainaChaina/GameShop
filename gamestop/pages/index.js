import style from '../styles/Home.module.css'
import GameCard from '../components/GameCard'
import games from '../public/products.json'
import Cart from '../components/Cart'

console.log(games)

export default function Home() {
  return (
    <div className={style.wrap}>
      <div className={style.shop}>
        {games.map((game) => <GameCard key={game.id} name ={game.name}  image ={game.image} price ={game.price} score ={game.score} > </GameCard>) }
      </div>
      <div className={style.cart} >  
        <Cart></Cart>
      </div>
    </div>
  )
}
