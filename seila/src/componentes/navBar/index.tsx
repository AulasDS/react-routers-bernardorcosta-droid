import style from './style.module.scss'

export default function NavBar(){
    return(
        <nav className={style.navbar}>
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="products/">Produtos</a>
            </div>
        </nav>
    );
}