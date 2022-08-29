export default function Modal(props) {
    document.addEventListener("click", function (e) {
        if (e.target.className === "overlay") {
            const mod = document.getElementsByClassName("modal animated")[0];
            mod.classList.add("animatedReverse");
            setTimeout(() => props.setOpen(false), 200);
        }
    });

    return (
        <div className="overlay">
            <div className="modal animated">
                <h1>Солнышко</h1>
                <p>Люблю тебя❤</p>
                <img
                    src="https://sun1-95.userapi.com/impg/jYDLaR0ixwqgUzrV8sVQ4qpqDezXNOViaH_LRg/tdifuuJ41l4.jpg?size=632x1080&quality=96&sign=442f4cbb596a92fc391b8f357ba041fd&type=album"
                    alt=""
                />
            </div>
        </div>
    );
}
