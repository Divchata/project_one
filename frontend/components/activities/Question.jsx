import {Fragment} from 'react';
import OptionGroup from "./OptionGroup";

const replaceBlankWithFirstOption = function (text, option) {
    const [first, second] = text.split('_');
    return <><span>{first}</span><span className="inactive">{option}</span><span>{second}</span></>
}

export default function Question({text, options, index}) {
    return <Fragment>
        <p><span className="question-number">{index}</span>{replaceBlankWithFirstOption(text, options[0])}</p>
        <OptionGroup options={options}/>
    </Fragment>
}
