import "./topbar.scss"
import Logo from "./images/logo.svg"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Victor</a>
                    <div className="itemContainer">
                     <Logo/>
                    </div>
                </div>
                <div className="right">Right</div>
            </div>
        </div>
    )
}
