import Option from "./Option";

export default function OptionGroup(props) {
    return <div className="option-group">
        {props.options.map(option => <Option key={option} text={option}/>)}
    </div>
}
