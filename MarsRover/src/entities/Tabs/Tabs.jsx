import "./tabs.css";

export const Tabs = (props) => {
    return (
        <div className="tabsContainer">
            {props.children}
        </div>
    )
}
