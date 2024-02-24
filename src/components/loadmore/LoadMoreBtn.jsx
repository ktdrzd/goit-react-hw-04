import style from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({onClick}) => {
    return (
        <div className={style.cont}>
            <button className={style.button} type="click" onClick={onClick}>Load more</button>
        </div>
    )
}

export default LoadMoreBtn;