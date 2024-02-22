// import style from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({onClick}) => {
    return (
        <div>
            <button type="click" onClick={onClick}>Load more</button>
        </div>
    )
}

export default LoadMoreBtn;